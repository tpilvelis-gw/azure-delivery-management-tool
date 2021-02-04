docker build -t az-delivery-management-ui .
docker run -d --name mycontainer2 -p 3000:3000 az-delivery-management-ui