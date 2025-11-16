# #!/usr/bin/env bash
# set -euo pipefail

# # 1) create a venv (optional for local builds)
# python -m venv .venv
# source .venv/bin/activate

# # 2) install requirements
# pip install --upgrade pip
# pip install -r requirements.txt

# # 3) collect static files into dist/static
# export DJANGO_SETTINGS_MODULE=AgriSwiftWebApp.settings
# python manage.py collectstatic --noinput --clear

# # 4) generate static HTML files into the 'dist' folder
# # django-distill: output directory passed as argument
# python manage.py distill-local dist --force

# # 5) Deactivate (optional)
# deactivate || true

# echo "Build complete"


#!/usr/bin/env bash
#!/usr/bin/env bash
set -euo pipefail

echo "Build START"

pip install --upgrade pip
pip install -r requirements.txt

export DJANGO_SETTINGS_MODULE=AgriSwiftWebApp.settings

# 1. Collect static
python manage.py collectstatic --noinput --clear

# 2. Generate static HTML
python manage.py distill-local dist --force

# 3. Copy staticfiles → dist/static (NO SYMLINKS)
mkdir -p dist/static
cp -RL staticfiles/* dist/static/

echo "Build END"

