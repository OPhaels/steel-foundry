# Steel Foundry

Projeto web feito com Django para gerenciar e visualizar dados da fundição - Dashboard.  

---

## 📁 Estrutura do Projeto
```
steel-foundry/
│
├── core/             # Aplicação principal do projeto
├── scripts/          # Scripts auxiliares e utilitários
├── static/           # Arquivos estáticos (CSS, JS, imagens)
├── templates/        # Templates HTML (interface)
│
├── .gitattributes    # Configurações de atributos do Git
├── .gitignore        # Arquivos e pastas ignorados pelo Git
├── manage.py         # Comando principal do Django
├── requirements.txt  # Lista de dependências do projeto
└── .venv/            # Ambiente virtual (não versionado)
```

---

Se ainda **não tiver o `.venv` criado**, execute:

```bash
python -m venv .venv
```
Ativando o Ambiente Virtual
```bash
.venv\Scripts\activate
```
Com o ambiente virtual ativado, rode:
```bash
pip install -r requirements.txt
```
Executando o Projeto
```bash
python manage.py runserver
```
