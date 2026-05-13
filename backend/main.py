from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*", "null"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


class MensagemRequest(BaseModel):
    mensagem: str


@app.post("/ia")
def responder(data: MensagemRequest):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": (
                    "Você é um assistente acolhedor de saúde mental. "
                    "O usuário vai descrever como está se sentindo. "
                    "Responda com empatia, valide o sentimento dele e sugira de 1 a 3 práticas simples que podem ajudar. "
                    "Seja humano, direto e gentil. Não use linguagem clínica. "
                    "Se o caso parecer grave, sugira buscar apoio profissional e mencione o CVV (188)."
                )
            },
            {"role": "user", "content": data.mensagem}
        ],
        temperature=0.7,
        max_tokens=400
    )

    return {"resposta": response.choices[0].message.content}
