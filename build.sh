app_name="vis-web-admin"
app_version="0.0.8"
docker_user="vis"
docker_pwd="visPower@2021"
docker_project="vis"
docker_domain="ub20-docker.com"

echo "node version: \c"
node -v
echo "npm version: \c"
npm -v
echo "vue version: \c"
vue -V
echo "docker version: \c"
docker -v

npm run build

docker login --username=${docker_user} --password=${docker_pwd} ${docker_domain}

docker build -t ${docker_domain}/${docker_project}/${app_name}:${app_version} .

docker image ls ${app_name}

docker push ${docker_domain}/${docker_project}/${app_name}:${app_version}