# Calculadora de IMC

Pequeno projeto web para calcular o Índice de Massa Corporal (IMC) a partir do peso e da altura informados pelo usuário, com classificação do resultado conforme a tabela da OMS.

## Objetivo

Este projeto foi desenvolvido como atividade avaliativa com foco na utilização correta do **Git**, do **GitHub** e do **GitFlow** para registrar todo o ciclo de desenvolvimento — não na complexidade da aplicação em si.

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## Como usar

Basta abrir o arquivo `index.html` em qualquer navegador. Informe o peso (kg) e a altura (m) e clique em "Calcular" para ver o IMC e a sua classificação.

## Fórmula

```text
IMC = peso (kg) / altura (m)²
```

## Fluxo de desenvolvimento

Este repositório segue o modelo **GitFlow**:

- `main`: código estável, correspondente às versões publicadas (releases/hotfixes).
- `develop`: integração das features em desenvolvimento.
- `feature/*`: novas funcionalidades.
- `release/*`: preparação de uma nova versão.
- `hotfix/*`: correções urgentes aplicadas diretamente a partir de `main`.
