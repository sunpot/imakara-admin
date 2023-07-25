fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_client(false)
        .build_server(true)
        .out_dir(r#"src/proto"#)
        .compile(&[r#"../../proto/common.proto"#],
                 &[r#"../.."#])?;
    Ok(())
}
