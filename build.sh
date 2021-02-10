app_name="vis-web-admin"
app_version="0.0.1"

echo "node version: \c"
node -v
echo "npm version: \c"
npm -v
echo "vue version: \c"
vue -V
echo "docker version: \c"
docker -v
npm run build
docker build -t ${app_name}:${app_version} .
docker image ls ${app_name}