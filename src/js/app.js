// Configure o webhook do n8n aqui para ativar respostas com IA.
// O webhook deve receber { mensagem: string } e retornar { resposta: string }.
const AI_WEBHOOK_URL = "https://guia-de-saude-mental-api.onrender.com/ia";

const input = document.getElementById("campo-pesquisa");
const btnPesquisar = document.getElementById("btn-pesquisar");
const secao = document.getElementById("resultados-pesquisa");

btnPesquisar.addEventListener("click", pesquisar);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") { e.preventDefault(); pesquisar(); }
});

document.querySelectorAll(".chip").forEach(function (chip) {
  chip.addEventListener("click", function () {
    input.value = chip.dataset.valor;
    pesquisar();
  });
});

async function pesquisar() {
  const termo = input.value.trim();
  if (!termo) return;

  btnPesquisar.disabled = true;
  secao.innerHTML = "";

  secao.appendChild(criarLoader());

  const recursosEncontrados = buscarRecursos(termo);

  if (AI_WEBHOOK_URL) {
    try {
      const resposta = await chamarIA(termo);
      secao.innerHTML = "";
      if (resposta) secao.appendChild(criarCardIA(resposta));
    } catch {
      secao.innerHTML = "";
    }
  } else {
    secao.innerHTML = "";
  }

  if (recursosEncontrados.length > 0) {
    const label = document.createElement("p");
    label.className = "results-label";
    label.textContent = "Recursos recomendados";
    secao.appendChild(label);

    recursosEncontrados.forEach(function (solucao) {
      secao.appendChild(criarCardRecurso(solucao));
    });
  } else if (!AI_WEBHOOK_URL) {
    const vazio = document.createElement("div");
    vazio.className = "estado-vazio";
    vazio.innerHTML = `<p>Não encontrei recursos específicos para "<strong>${escapeHtml(termo)}</strong>".</p>
      <p style="margin-top:8px;font-size:0.85rem;">Tente palavras como: ansiedade, tristeza, estresse, medo, solidão.</p>`;
    secao.appendChild(vazio);
  }

  btnPesquisar.disabled = false;
}

function buscarRecursos(termo) {
  const termoLower = termo.toLowerCase();
  const resultados = [];

  for (const dado of dados) {
    if (termoLower.includes(dado.sentimento.toLowerCase()) ||
        dado.sentimento.toLowerCase().includes(termoLower)) {
      resultados.push(...dado.solucoes);
      break;
    }
  }

  // Busca parcial se não encontrou exato
  if (resultados.length === 0) {
    for (const dado of dados) {
      const palavras = termoLower.split(/\s+/);
      const match = palavras.some(function (p) {
        return p.length > 3 && dado.sentimento.toLowerCase().includes(p);
      });
      if (match) {
        resultados.push(...dado.solucoes);
        break;
      }
    }
  }

  return resultados;
}

async function chamarIA(mensagem) {
  const response = await fetch(AI_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mensagem })
  });
  const data = await response.json();
  return data.resposta || data.response || data.message || null;
}

function criarLoader() {
  const div = document.createElement("div");
  div.className = "loader-card";
  div.innerHTML = `
    <div class="loader-dot"></div>
    <div class="loader-dot"></div>
    <div class="loader-dot"></div>
    <span>Buscando apoio para você...</span>
  `;
  return div;
}

function criarCardIA(resposta) {
  const div = document.createElement("div");
  div.className = "ai-response-card";
  div.innerHTML = `
    <div class="ai-response-header">
      <span>🤖</span>
      <span class="ai-response-badge">Resposta da IA</span>
    </div>
    <p class="ai-response-text">${escapeHtml(resposta)}</p>
  `;
  return div;
}

function criarCardRecurso(solucao) {
  const div = document.createElement("div");
  div.className = "item-resultado";
  div.innerHTML = `
    <h2>${escapeHtml(solucao.titulo)}</h2>
    <p class="descricao-meta">${escapeHtml(solucao.descricao)}</p>
    ${solucao.link ? `<a class="resultado-link-btn" href="${escapeHtml(solucao.link)}" target="_blank" rel="noopener noreferrer">
      ▶ Acessar recurso
    </a>` : ""}
  `;
  return div;
}

function escapeHtml(text) {
  const t = document.createElement("div");
  t.textContent = String(text);
  return t.innerHTML;
}
