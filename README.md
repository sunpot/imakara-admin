## Build proto

### Linux

```sh
cd frontend
pnpm install
cd ..
buf generate --path ./proto
```

### Windows

- frontend
    ```powershell
    cd frontend
    pnpm install
    cd ..
    Set-Item Env:Path "$pwd\frontend\node_modules\.bin;$ENV:Path"
    buf.cmd generate --path .\proto
    ```
- backend
    ```
    cd .\backend\youtube-info
    .\venv\Scripts\avtivate
    python -m grpc_tools.protoc -I..\..\proto --python_out=. --pyi_out=. --grpc_python_out=. ..\..\proto\common.proto
    .\venv\Scripts\deactivate
    ```
    ```
    cd .\backend\datastore
    cargo build
    ```