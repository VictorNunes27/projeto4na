{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x  # Usando a versão 18 do Node.js
    pkgs.nodePackages.npm  # Instalando o npm
  ];
}
