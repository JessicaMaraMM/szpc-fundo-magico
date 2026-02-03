document.addEventListener("DOMContentLoaded", function () {
    // Objetivo:
    // Enviar um texto de um formulário para uma API do n8n e exibir o resultado do código HTML, CSS e colocar a animação no fundo da tela do site.
    // Passos:
    // 1. No JavaScript, pegar o evento de submit do formulário para evitar o recarregamento da página.
    const form = document.querySelector(".form-group");
    const descriptionInput = document.getElementById("description");
    const codeHtml = document.getElementById("html-code");
    const codeCSS = document.getElementById("css-code");
    const previewSection = document.getElementById("preview-section");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // 2. Obter o valor digitado pelo usuário no campo de texto.
        const description = descriptionInput.value.trim(); // Pega o valor do input e remove espaços em branco desnecessários
        if (!description) {
            return;
        }

        // 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
        showLoadingIndicator(true);

        // 4. Fazer uma requisitação HTTP (POST) para a API do n8n, enviando o texto do formulário no corpo da requisição em formato JSON.
        try {
            const response = await fetch("https://jessicamaramm.app.n8n.cloud/webhook/fundo-magico", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ description })
            });
            const data = await response.json();
            console.log(data);

            codeHtml.textContent = data.html || "";
            codeCSS.textContent = data.css || "";

            console.log("HTML recebido:", data.html);
            console.log("CSS recebido:", data.css);

            // Criar ou limpar o container de fundo
            let backgroundContainer = document.getElementById("dynamic-background");
            if (!backgroundContainer) {
                backgroundContainer = document.createElement("div");
                backgroundContainer.id = "dynamic-background";
                document.body.insertBefore(backgroundContainer, document.body.firstChild);
            }
            backgroundContainer.innerHTML = data.html || "";

            // Aplicar o CSS dinamicamente - ajustando seletores para funcionar dentro do container
            let tagStyle = document.getElementById("dynamic-style");
            if (tagStyle) {
                tagStyle.remove();
            }
            if (data.css) {
                // Modificar o CSS para aplicar ao container de fundo
                let modifiedCSS = data.css
                    .replace(/body\s*{/g, '#dynamic-background {')
                    .replace(/html\s*{/g, '#dynamic-background {');

                tagStyle = document.createElement("style");
                tagStyle.id = 'dynamic-style';
                tagStyle.textContent = `
                    #dynamic-background {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        pointer-events: none;
                        overflow: hidden;
                    }
                    ${modifiedCSS}
                `;
                document.head.appendChild(tagStyle);
            }

            // Mostrar o preview na seção também
            previewSection.style.display = "block";
            previewSection.innerHTML = data.html || "";

            // Adicionar a classe para aplicar o efeito no fundo
            document.body.classList.add('results-ready');

        } catch (error) {
            console.error("Erro ao fazer a requisição:", error);
            codeHtml.textContent = "Erro ao gerar o código HTML, tente novamente.";
            codeCSS.textContent = "Erro ao gerar o código CSS, tente novamente.";
            previewSection.innerHTML = "";

        } finally {
            showLoadingIndicator(false);
        }


    });


    function showLoadingIndicator(isLoading) {
        const submitButton = document.getElementById('generate-btn');
        if (isLoading) {
            submitButton.textContent = "Carregando Background...";
        } else {
            submitButton.textContent = "Gerar Background Mágico";
        }
    }

});