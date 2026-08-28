# CONTEXTO GLOBAL DO PROJETO: VOXELCRAFT 3D (v0.4.0)

Este documento é a referência técnica, de arquitetura e de design central do **VoxelCraft 3D**. Ele foi elaborado para que qualquer inteligência artificial, agente ou desenvolvedor humano possa se orientar imediatamente, compreender o código-fonte, respeitar os padrões estabelecidos, entender a visão macro do jogo e continuar o desenvolvimento com máxima solidez.

> [!IMPORTANT]
> **Filosofia de Desenvolvimento & O Ciclo da Vida do Jogo**:
> O VoxelCraft opera sobre uma visão macro interconectada onde **toda nova adição deve se integrar harmonicamente às outras partes do ecossistema**.
> Nenhuma funcionalidade existe isolada: upgrades, matérias-primas e ferramentas seguem uma cadeia lógica de causa e efeito (*bloco bruto $\rightarrow$ refinamento $\rightarrow$ ferramentas $\rightarrow$ novas capacidades $\rightarrow$ sobrevivência e combate*).
> **Regra de Ouro**: A cada nova funcionalidade, refatoração ou melhoria concluída, este documento `CONTEXTO.md` **deve ser rigorosamente atualizado** com as novas estruturas, mecânicas implementadas e sugestões para os próximos passos. Pense antes de aplicar, elabore antes de mexer, nunca quebre o que já está funcionando!

---

## 1. Visão Geral do Projeto & Cadeia de Progressão Expandida

O **VoxelCraft** é um jogo sandbox voxel 3D no estilo Minecraft autêntico, desenvolvido para rodar com 60 FPS constantes, estética visual premium e zero assets externos pesados diretamente no navegador web.

### 🌳 O Ciclo Autêntico de Progressão (*Progression Loop*):
```
[Tronco de Carvalho] (Minerado com mão)
        ↓ (Crafting 2x2 ou 3x3)
[Tábuas de Madeira] ──→ [Gravetos] & [Bancada de Trabalho 3x3] & [Baú de 27 Slots]
        ↓
[Picareta & Enxada de Madeira] ──→ Arar [Terra Arada] & Minera [Pedregulho / Pedra]
        ↓
[Fornalha 3x3] (8 Pedregulhos) + [Ferramentas de Pedra] ──→ Minera [Minério de Ferro] & [Carvão]
        ↓
[Fundição na Fornalha] (Minério de Ferro + Carvão/Madeira)
        ↓
[Barra de Ferro (Lingote)] & [Bife Assado] & [Pão Dourado de Trigo]
        ↓
[Era do Ferro & Combate Avançado]: 
  - Picareta de Ferro + Espada de Ferro + Enxada de Ferro
  - Armadura Completa (Capacete, Peitoral, Calças, Botas)
  - Arco de Caça (`BOW`) disparando Flechas (`ARROW`) balísticas na primeira pessoa!
        ↓
[Sobrevivência, Agricultura & Explosivos]:
  - Cultivo de Trigo com Enxadas e Sementes $\rightarrow$ Pão nutritivo.
  - Combate contra Zumbis, Esqueletos Arqueiros, Aranhas e **Creepers explosivos**!
  - Coleta de Pólvora (`GUNPOWDER`) $\rightarrow$ Fabricação de Blocos de **TNT** para mineração com crateras esféricas!
```

---

## 2. Estrutura de Diretórios e Módulos

```
VOXELCRAFT/
├── client/
│   ├── index.html                 # Layout HTML, menu inicial premium v0.4.0, HUD, modais CSS
│   └── src/
│       ├── main.js                # Bootstrap e loop central do jogo (conecta mundo, IA, fornalha, clima e saves)
│       ├── engine/
│       │   ├── camera.js          # Câmera FPS, Pointer Lock, sensibilidade e FOV
│       │   ├── input.js           # Gerenciador de eventos de teclado
│       │   ├── interaction.js     # Quebra progressiva, combate com arco/espadas, cultivo, baús e TNT
│       │   ├── loop.js            # Game Loop baseado em requestAnimationFrame
│       │   ├── raycast.js         # Raycaster DDA através da grade voxel
│       │   ├── saveManager.js     # Persistência automática no LocalStorage (mundo, inventário, posição, vida)
│       │   └── soundFx.js         # Sintetizador procedural Web Audio API (arco, fusível do creeper, explosões, enxada)
│       ├── entities/
│       │   ├── player.js          # Física AABB, pulo, passos dinâmicos, mitigação de armadura e regeneração
│       │   ├── hand.js            # Braço 3D em primeira pessoa, empunhadura e animações de ataque
│       │   ├── mobManager.js      # IA: Zumbis, Esqueletos, Aranhas, Porcos e Creepers com explosões esféricas
│       │   └── dropManager.js     # Entidades de drops 3D flutuantes com magnetismo ao jogador
│       ├── rendering/
│       │   ├── sceneSetup.js      # Criação de Renderer, Scene, Luzes direcionais/ambientais e Fog
│       │   ├── blockPreview.js    # Modelos 3D de blocos, espadas, picaretas, enxadas, arcos e comidas segurados
│       │   ├── particles.js       # Sistema de partículas 3D (mineração, impacto, explosões e combate)
│       │   └── textures/
│       │       ├── textureGenerator.js # Gerador procedural 16x16 (terra arada, trigo 1..3, TNT, baú, fornalha)
│       │       └── textureAtlas.js     # Atlas de texturas 4x16 (64 slots) e coordenadas UVs sub-texel
│       ├── ui/
│       │   ├── uiManager.js       # Autoridade central de estados (Game State, modais e Pointer Lock)
│       │   ├── titleScreen.js     # Gerenciador da tela inicial premium, modais de controles/configurações e pausa
│       │   ├── hud.js             # Overlay de FPS, Coordenadas XYZ, Bioma, Relógio ☀️/🌙 e Voo
│       │   ├── hotbar.js          # Barra rápida inferior sincronizada (slots 1..9)
│       │   ├── inventory.js       # Inventário completo (27 storage + 9 hotbar), 4 slots de armadura e 2x2 crafting
│       │   ├── chest.js           # GUI interativa do Baú de 27 Slots com persistência por coordenadas no mundo
│       │   ├── crafting.js        # Catálogo com 22 receitas 2x2/3x3, Bancada 3x3 e Livro de Receitas (?)
│       │   ├── furnace.js         # GUI e lógica da Fornalha (combustível, fundição de ferro, assar carnes)
│       │   ├── health.js          # Barra de corações e barra de escudos/armadura
│       │   └── blockIcon.js       # Gerador de ícones 2D e isométricos de itens, armas, armaduras e comidas
│       └── world/
│           ├── blockTypes.js      # Registro de blocos, ferramentas, enxadas, arcos, sementes, trigo, pão, TNT
│           ├── chunk.js           # Volume 16x64x16 de blocos e geração de mesh com face culling
│           ├── dayNightCycle.js   # Ciclo 24h orbital de Sol e Lua 3D com atmosfera e névoa dinâmica
│           ├── weather.js         # Clima dinâmico (chuva 3D procedural e escurecimento do céu)
│           └── worldManager.js    # Biomas procedurais, Cavernas 3D com entradas e streaming infinito
├── package.json                   # Dependências e scripts npm
├── vite.config.js                 # Configuração do Vite
└── CONTEXTO.md                    # Documento mestre de arquitetura
```

---

## 3. Baú de Armazenamento Interativo (`chest.js`)

- **Bloco de Baú (`BlockType.CHEST`)**:
  - Fabricado na Bancada 3×3 com 8 Tábuas de Madeira ao redor do centro.
  - Ao clicar com **Botão Direito** no Baú colocado no mundo, abre a GUI de 27 slots de armazenamento.
- **Persistência & Transferência**:
  - Cada baú armazena seus itens indexados pelas coordenadas mundiais `(x, y, z)`.
  - Clicar em qualquer item da hotbar do jogador o transfere diretamente para o baú.
  - Clicar em um item do baú o transfere de volta ao inventário do jogador.
  - Ao quebrar o bloco do baú no cenário, todos os itens guardados dentro dele são ejetados como drops 3D flutuantes ao redor da posição.

---

## 4. Arco & Flechas Funcionais para o Jogador (`BOW` & `ARROW`)

- **Fabricação do Arco**: 3 Gravetos e 3 Linhas de Teia (`STRING`) na Bancada 3×3.
- **Mecânica de Disparo**:
  - Segurar e clicar com o **Botão Direito** empunhando o Arco dispara projéteis de flechas 3D na direção da mira da câmera.
  - Consome 1 Flecha do inventário por disparo.
  - Projétil veloz (26 blocos/s) com balística parabólica e gravidade.
  - Causa **9 de dano crítico** ao atingir mobs (Zumbis, Esqueletos, Aranhas, Creepers ou Porcos), aplicando knockback e partículas de impacto!
  - Áudio sintetizado de disparo (*bow twang sound*).

---

## 5. Creeper & Sistema de Explosões Voxel (`CREEPER` & `TNT`)

1. **Creeper (`MobType.CREEPER`)**:
   - Modelo 3D característico com camuflagem verde, 4 patas e rosto icônico.
   - **IA Furtiva & Autodestruição**:
     - Persegue o jogador silenciosamente.
     - Quando a menos de 3.2 blocos: para de se mover, infla de tamanho (*pulsing inflation*) e começa a chiar (*tsssss*).
     - Contagem regressiva de 1.5s: se o jogador não se afastar para além de 5.5 blocos, **EXPLODE**!
     - Dropa Pólvora (`GUNPOWDER`) se for eliminado antes de explodir.
2. **Explosões Voxel Esféricas (`createVoxelExplosion`)**:
   - Som retumbante de explosão e tremor.
   - Destrói fisicamente todos os blocos em um raio esférico, abrindo crateras no cenário voxel.
   - Dropa blocos destruídos como itens soltos com 40% de chance.
   - Dano em área radial mitigado pela distância e pela armadura equipada.
3. **Bloco de TNT (`BlockType.TNT`)**:
   - Fabricado com 5 Pólvoras + 4 Areias intercaladas na Bancada 3×3.
   - Ao bater ou clicar na TNT, o bloco acende, pisca em branco por 2.2s com som de pavio aceso e detona abrindo uma cratera de raio 3.8 blocos!

---

## 6. Ciclo de Agricultura & Alimentação com Trigo (`Farming`)

- **Ferramentas de Aragem**:
  - Enxadas de Madeira (`WOODEN_HOE`), Pedra (`STONE_HOE`) e Ferro (`IRON_HOE`).
  - Clicar com Botão Direito na Terra (`DIRT`) ou Grama (`GRASS`) com a Enxada a transforma em **Terra Arada (`FARMLAND`)**.
- **Coleta de Sementes & Plantio**:
  - Quebrar grama comum possui 35% de chance de dropar **Sementes de Trigo (`WHEAT_SEEDS`)**.
  - Clicar com as sementes na Terra Arada planta os brotos de trigo (`WHEAT_STAGE_1`).
- **Crescimento & Colheita**:
  - Simulação de crescimento automático através dos 3 estágios visuais (`WHEAT_STAGE_1` $\rightarrow$ `WHEAT_STAGE_2` $\rightarrow$ `WHEAT_STAGE_3`).
  - Ao colher o trigo dourado maduro (Estágio 3), o jogador obtém **Trigo (`WHEAT`)** e novas **Sementes de Trigo**.
- **Pão Dourado (`BREAD`)**:
  - Fabricado na bancada com 3 Trigos alinhados horizontalmente.
  - Alimento assado nutritivo que restaura +5 pontos de vida (2.5 corações) ao clicar com botão direito!

---

## 7. Atlas de Texturas Expandido (4×16 - 64 Slots)

O atlas de texturas procedurais agora conta com 36 texturas renderizadas em 64×256 pixels com sub-texel insets:
- `0..27`: Grama, Terra, Pedra, Areia, Neve, Troncos, Folhas, Minérios, Água, Cactos, Fornalhas, Baús, etc.
- `28`: `farmland_top` (Sulcos arados escuros)
- `29`: `farmland_side` (Perfil de terra arada)
- `30..32`: `wheat_stage1`, `wheat_stage2`, `wheat_stage3` (Estágios de plantação de trigo)
- `33..35`: `tnt_top`, `tnt_side` (com faixa branca e letras pretas TNT), `tnt_bottom`

---

## 8. Design System Visual, Modais Glassmorphism & Tailwind UI Tokens (`index.html`, `inventory.js`, `furnace.js`, `crafting.js`, `chest.js`)

- **Tipografia Moderna & Ícones**:
  - `Space Grotesk`: Títulos e botões principais com impacto visual e efeito `title-glow`.
  - `JetBrains Mono`: Badges técnicos, tags, contadores numéricos, coordenadas e atalhos de teclado.
  - `Inter`: Textos de leitura e descrições dos modais.
  - `Google Material Symbols Outlined`: Ícones dinâmicos de alta definição (`play_arrow`, `local_fire_department`, `backpack`, `construction`, `inventory_2`, `menu_book`, etc.).
- **Fundo Dinâmico Shader GLSL**:
  - Shader procedural Simplex Noise com gradiente dark-green/deep-space e partículas de poeira cósmica/voxel flutuantes em tempo real via WebGL canvas (`#shader-canvas-ANIMATION_2`).
- **Interface do Inventário & Crafting (`inventory.js`)**:
  - Layout dividido em quadrantes:
    - **Survival Crafting (2×2)**: Grade de fabricação rápida com seta direcional e slot de saída forjado (`active` glow).
    - **Personagem & Armadura**: 4 slots de equipamento com ícones semânticos (`security`, `checkroom`, `accessibility`, `directions_run`), silhueta do jogador e slot de escudo.
    - **Mochila (27 slots)**: Grade 9×3 com bordas adaptativas, contadores em badge e suporte a transferência por clique.
    - **Barra Rápida (Hotbar 1..9)**: Destaque visual verde brilhante no item atualmente selecionado em mãos.
- **Interface da Fornalha Industrial (`furnace.js`)**:
  - Header com ícone de chama ardente.
  - **Câmara de Combustão**: Slots ampliados de Entrada (`INPUT`) e Combustível (`FUEL`), com animação de calor pulsante e altura da chama mascarada conforme o consumo do carvão/madeira.
  - **Barra de Progresso de Fundição**: Barra com transição suave e ícone de seta dourada.
  - **Slot de Saída Master**: Slot ampliado com efeito de brilho suave e botões de ação integrados (*Parar* e *Coletar*).
  - Faixa inferior de acesso rápido para carregar itens da hotbar direto para a fornalha.
- **Bancada de Trabalho 3×3 & Livro de Receitas (`crafting.js`)**:
  - Matriz 3×3 com guia visual de receitas interativo em cards ilustrados com diagramas em miniatura de montagem.

---

## 9. Backlog & Sugestões para os Próximos Passos (v0.5.0)

Caso deseje continuar expandindo o ecossistema nas próximas iterações:

1. **Geração de Aldeias & Vilões (NPCs / Villagers)**:
   - Casas de madeira e pedra geradas proceduralmente nos biomas de Planície.
   - Aldeões que trocam itens por Esmeraldas.
2. **Ciclo de Minérios Raros (Diamante & Ouro)**:
   - Minério de Diamante e Ouro em profundidades inferiores (y < 12).
   - Picareta e Espada de Diamante com dureza e durabilidade extremas.
3. **Bioma de Pântano com Vitórias-Régias e Slimes**:
   - Águas turvas verdes, cipós nas árvores e Slimes saltitantes.
4. **Porta de Madeira e Janelas de Vidro**:
   - Fundir Areia na Fornalha $\rightarrow$ Vidro transparente.
   - Portas de madeira interativas que abrem e fecham com clique.

---

*Documento gerado e mantido rigorosamente atualizado pelo assistente Antigravity para a versão v0.4.0.*
