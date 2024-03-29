# Desafio Frontend - Smart Fit

![Smart Fit](./src/assets/images/svg/logo.svg)

Este repositório foi desenvolvido como solução para o desafio de [Front-end da Smart Fit](https://github.com/bioritmo/front-end-code-challenge-smartsite/tree/master)
utilizando o framework Angular.  
**PROJETO ONLINE ->** [Front-end Smart Fit](https://smartfit-challenge-brunopigatto.vercel.app/)

## 📖 Sobre o desafio

A Smart Fit, atuando no segmento de fitness, passou por várias mudanças durante a pandemia. Foi necessário desenvolver uma página para buscar unidades abertas ou fechadas para consulta e reserva.

Neste desafio, serão implementados as seguintes funcionalidades de acordo com as regras de negócio definidas:

### Funcionalidades desenvolvidas

- [x] Carregar unidades através do arquivo JSON [locations.json](https://test-frontend-developer.s3.amazonaws.com/data/locations.json) utilizando o método `GET`.
- [x] Buscar por todas as unidades.
- [x] Buscar por unidades com filtros.
- [x] Previsão do número de resultados encontrados.
- [x] Listagem das unidades encontradas após a busca.
- [x] Responsividade.

### Regras de negócio

- Filtrar unidades abertas ou fechadas.
- Filtrar unidades por período de funcionamento.
- Exibe a mensagem "Nenhuma unidade encontrada" quando não há resultados.
- Valida e exibe os ícones corretos de acordo com o status da unidade.

## 🎨 Layout

O layout da aplicação foi baseado nos materiais disponibilizados, incluindo designs para dispositivos móveis e desktop, cores, imagens e fontes. A fidelidade ao layout proposto foi mantida, e a aplicação é responsiva para dispositivos móveis, tablets e desktops.

## ⚙️ Como Executar

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone este repositório:

```bash
  git clone https://github.com/BrunoPigatto/smartfit-challenge.git
  cd smartfit-challenge

```

2. Instale as dependências

```bash
  npm install
```

3. Inicie a aplicação

```bash
  npm start
```

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais detalhes.
