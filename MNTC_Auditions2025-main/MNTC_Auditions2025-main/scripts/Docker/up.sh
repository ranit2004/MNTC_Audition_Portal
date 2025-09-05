docker run -d \
    --name mntc_audition_db \
    -e MONGO_INITDB_ROOT_USERNAME=root \
    -e MONGO_INITDB_ROOT_PASSWORD=password \
    -p 27017:27017 \
    mongo:latest