# CONTEXTO GLOBAL DO PROJETO: VOXELCRAFT 3D (v0.3.0)

Este documento é a referência técnica, de arquitetura e de design central do **VoxelCraft 3D**. Ele foi elaborado para que qualquer inteligência artificial, agente ou desenvolvedor humano possa se orientar imediatamente, compreender o código-fonte, respeitar os padrões estabelecidos, entender a visão macro do jogo e continuar o desenvolvimento com máxima solidez.

> [!IMPORTANT]
> **Filosofia de Desenvolvimento & O Ciclo da Vida do Jogo**:
> O VoxelCraft opera sobre uma visão macro interconectada onde **toda nova adição deve se integrar harmonicamente às outras partes do ecossistema**.
> Nenhuma funcionalidade existe isolada: upgrades, matérias-primas e ferramentas seguem uma cadeia lógica de causa e efeito (*bloco bruto $\rightarrow$ refinamento $\rightarrow$ ferramentas $\rightarrow$ novas capacidades $\rightarrow$ sobrevivência e combate*).
> **Regra de Ouro**: A cada nova funcionalidade, refatoração ou melhoria concluída, este documento `CONTEXTO.md` **deve ser rigorosamente atualizado** com as novas estruturas, mecânicas implementadas e sugestões para os próximos passos. Pense antes de aplicar, elabore antes de mexer, nunca quebre o que já está funcionando!

---

## 1. Visão Geral do Projeto & Cadeia de Progressão

O **VoxelCraft** é um jogo sandbox voxel 3D no estilo Minecraft autêntico, desenvolvido para rodar com 60 FPS constantes, estética visual premium e zero assets externos pesados diretamente no navegador web.

### 🌳 O Ciclo Autêntico de Progressão (*Progression Loop*):
```
[Tronco de Carvalho] (Minerado com mão)
        ↓ (Crafting 2x2 ou 3x3)
[Tábuas de Madeira] ──→ [Gravetos] & [Bancada de Trabalho 3x3]
        ↓
[Picareta de Madeira] ──→ Minera [Pedregulho / Pedra]
        ↓
[Fornalha 3x3] (8 Pedregulhos) + [Ferramentas de Pedra] ──→ Minera [Minério de Ferro] & [Carvão]
        ↓
[Fundição na Fornalha] (Minério de Ferro + Carvão/Madeira)
        ↓
[Barra de Ferro (Lingote)] & [Bife Assado] (Carne crua assada na fornalha)
        ↓
[Era do Ferro]: Picareta de Ferro + Espada de Ferro + Armadura Completa (Capacete, Peitoral, Calças, Botas)
        ↓
[Sobrevivência & Combate]: Exploração de Cavernas 3D com Tochas, Combate contra Zumbis, Esqueletos e Aranhas!
```

---

## 2. Estrutura de Diretórios e Módulos

```
VOXELCRAFT/
├── client/
│   ├── index.html                 # Layout HTML, tela inicial premium, HUD de escudos e corações, modais CSS
│   └── src/
│       ├── main.js                # Bootstrap e loop central do jogo (conecta mundo, IA, fornalha, clima e saves)
│       ├── engine/
│       │   ├── camera.js          # Câmera FPS, Pointer Lock, sensibilidade e FOV
│       │   ├── input.js           # Gerenciador de eventos de teclado
│       │   ├── interaction.js     # Quebra progressiva de blocos, combate, fornalha, bancada e alimentação
│       │   ├── loop.js            # Game Loop baseado em requestAnimationFrame
│       │   ├── raycast.js         # Raycaster DDA através da grade voxel
│       │   ├── saveManager.js     # Persistência automática no LocalStorage (mundo, inventário, posição, vida)
│       │   └── soundFx.js         # Sintetizador procedural Web Audio API (passos, ticks, fundição, combate)
│       ├── entities/
│       │   ├── player.js          # Física AABB, pulo, passos dinâmicos, mitigação de armadura e regeneração
│       │   ├── hand.js            # Braço 3D em primeira pessoa, empunhadura e animações de ataque
│       │   ├── mobManager.js      # IA tática: Zumbis melee, Esqueletos arqueiros (flechas), Aranhas e Porcos
│       │   └── dropManager.js     # Entidades de drops 3D flutuantes com magnetismo ao jogador
│       ├── rendering/
│       │   ├── sceneSetup.js      # Criação de Renderer, Scene, Luzes direcionais/ambientais e Fog
│       │   ├── blockPreview.js    # Modelos 3D de blocos e armas segurados na mão
│       │   ├── particles.js       # Sistema de partículas 3D (mineração, dano e combate)
│       │   └── textures/
│       │       ├── textureGenerator.js # Gerador procedural de texturas 16x16 (fornalha, baú, minérios)
│       │       └── textureAtlas.js     # Atlas de texturas 4x8 (32 slots) e coordenadas UVs
│       ├── ui/
│       │   ├── uiManager.js       # Autoridade central de estados (Game State, modais e Pointer Lock)
│       │   ├── titleScreen.js     # Gerenciador da tela inicial premium, modais de controles/configurações e pausa
│       │   ├── hud.js             # Overlay de FPS, Coordenadas XYZ, Bioma, Relógio ☀️/🌙 e Voo
│       │   ├── hotbar.js          # Barra rápida inferior sincronizada (slots 1..9)
│       │   ├── inventory.js       # Inventário completo (27 storage + 9 hotbar), 4 slots de armadura e 2x2 crafting
│       │   ├── crafting.js        # Catálogo de receitas 2x2/3x3, Bancada 3x3 e Livro de Receitas (?)
│       │   ├── furnace.js         # GUI e lógica da Fornalha (combustível, fundição de ferro, assar carnes)
│       │   ├── health.js          # Barra de corações e barra de escudos/armadura
│       │   └── blockIcon.js       # Gerador de ícones 2D e isométricos de itens, armas, armaduras e comidas
│       └── world/
│           ├── blockTypes.js      # Registro completo de blocos, ferramentas, armaduras, comidas e durezas
│           ├── chunk.js           # Volume 16x64x16 de blocos e geração de mesh
│           ├── dayNightCycle.js   # Ciclo 24h orbital de Sol e Lua 3D com atmosfera e névoa dinâmica
│           ├── weather.js         # Clima dinâmico (chuva 3D procedural e escurecimento do céu)
│           └── worldManager.js    # Biomas procedurais, Cavernas 3D com entradas e streaming infinito
├── package.json                   # Dependências e scripts npm
├── vite.config.js                 # Configuração do Vite
└── CONTEXTO.md                    # Documento mestre de arquitetura
```

---

## 3. Arquitetura Desacoplada de UI & Cursor (`uiManager.js`)

Para garantir zero bugs de dependência circular e transições 100% fluidas de mouse:
- **`uiManager.js`** centraliza o `currentGameState` (`TITLE_SCREEN`, `PLAYING`, `PAUSED`) e a `activeWindow` (`NONE`, `INVENTORY`, `CRAFTING_TABLE`, `FURNACE`, `RECIPE_BOOK`, `CONTROLS`, `SETTINGS`).
- **Controle de Pointer Lock**:
  - Durante o jogo em primeira pessoa, o mouse fica travado para girar a câmera.
  - Ao clicar em "INICIAR JOGO", a transição assíncrona do navegador é protegida por `wasPointerLocked`, evitando pausas indevidas no arranque.
  - Ao abrir qualquer menu (<kbd>E</kbd>, Bancada 3x3, Fornalha, Livro de Receitas), o cursor é liberado automaticamente para interação rápida com os slots.
  - Ao fechar o menu (com <kbd>E</kbd>, <kbd>ESC</kbd> ou botão ✕), o ponteiro do mouse é **automaticamente recapturado (`requestPointerLock`)**, voltando direto ao jogo sem exigir cliques manuais.
  - Clicar na tela durante o jogo ativo reativa o Pointer Lock de forma resiliente.

---

## 4. Fornalha e Sistema de Fundição (`furnace.js`)

- **Bloco de Fornalha (`FURNACE`)**:
  - Fabricado na Bancada 3×3 com 8 Pedregulhos ao redor do centro.
  - Ao clicar com **Botão Direito** no bloco de fornalha no mundo 3D, abre a GUI de Fundição.
- **Funcionamento & Receitas**:
  - **Slot Superior (Input)**:
    - Minério de Ferro $\rightarrow$ **Barra de Ferro (`IRON_INGOT`)** (tempo: 3.5s)
    - Costela de Porco Crua $\rightarrow$ **Bife Assado (`COOKED_PORKCHOP`)** (tempo: 2.5s)
    - Pedregulho $\rightarrow$ **Pedra Lisa (`STONE`)** (tempo: 3.0s)
  - **Slot Inferior (Combustível / Fuel)**:
    - Carvão: 16 segundos de queima contínua (rende ~5 fundições)
    - Tronco de Madeira: 6 segundos
    - Tábuas de Madeira: 3 segundos
    - Graveto: 1.5 segundo
  - **Slot Direito (Produto)**: Coleta do lingote ou alimento assado com som de sucesso.
  - Animação de chama acesa e barra de progresso visual de fundição.

---

## 5. Sistema de Armaduras, Saúde & Alimentação

- **Slots de Equipamento no Inventário** (<kbd>E</kbd>):
  - 4 slots dedicados: Capacete, Peitoral, Calças e Botas.
  - Clicar em qualquer armadura no inventário a equipa automaticamente no slot correto.
- **Valores de Defesa & Mitigação de Dano (`player.js`)**:
  - Capacete de Ferro: +2 Defesa
  - Peitoral de Ferro: +6 Defesa
  - Calças de Ferro: +5 Defesa
  - Botas de Ferro: +2 Defesa
  - Armadura Completa: 15 Defesa $\rightarrow$ Reduz até 60% de todo dano recebido de mobs e quedas!
  - Barra de 10 Escudos (`🛡️`) exibida no HUD acima dos corações de vida.
- **Alimentação Regenerativa**:
  - Clicar com **Botão Direito** segurando `COOKED_PORKCHOP` restaura +8 pontos de vida (4 corações).
  - Clicar segurando `PORKCHOP` cru restaura +3 pontos de vida (1.5 coração).

---

## 6. Inteligência Artificial Expandida & Novos Mobs (`mobManager.js`)

1. **Esqueleto Arqueiro (`MobType.SKELETON`)**:
   - Modelo 3D com ossos, arco e órbitas escuras.
   - **IA de Combate à Distância**: Mantém distância tática de 8 a 12 blocos do jogador (recua se o jogador avança e persegue se o jogador foge).
   - Atira projéteis de **Flechas** 3D com física e gravidade a cada 2.2s.
   - Queima sob a luz do sol durante o dia.
   - Dropa `BONE` (Osso) e `ARROW` (Flecha).
2. **Aranha Noturna/Subterrânea (`MobType.SPIDER`)**:
   - Modelo 3D com 8 patas articuladas e olhos vermelhos brilhantes (`0xef4444`).
   - Movimentação ágil (velocidade 4.5) e ataque com salto (*pounce leap*) quando a menos de 4.5 blocos.
   - Dropa `STRING` (Linha de teia) e `SPIDER_EYE` (Olho de aranha).
3. **Zumbi (`MobType.ZOMBIE`)**:
   - Ataque corpo-a-corpo com braços estendidos e queima solar durante o dia.
   - Dropa `ROTTEN_FLESH` e raramente `IRON_INGOT`.
4. **Porco (`MobType.PIG`)**:
   - Mob pacífico diurno que vaga pelos campos e foge em disparada ao receber dano.
   - Dropa `PORKCHOP`.

---

## 7. Clima Dinâmico & Atmosfera (`weather.js`)

- Alternância natural entre dias ensolarados e **Chuva / Tempestades**.
- Efeito de 800 partículas de chuva 3D caindo ao redor do jogador com aceleração gravitacional e transição suave de opacidade.
- Névoa e céu escurecem dinamicamente durante o período chuvoso.

---

## 8. Persistência & Salvamento Local (`saveManager.js`)

- Salva o estado completo no `localStorage`:
  - Posição tridimensional do jogador `(x, y, z)`
  - Pontos de vida atuais
  - Itens da Barra Rápida (Hotbar)
  - Peças de Armadura equipadas
- Auto-save periódico a cada 30 segundos de gameplay.
- Carregamento automático ao abrir o jogo.

---

## 9. Backlog & Sugestões para os Próximos Passos (v0.4.0)

Caso deseje continuar expandindo o jogo em sessões futuras, aqui estão as metas prioritárias recomendadas:

1. **Baú de Armazenamento Interativo (*Chest Storage GUI*)**:
   - Bloco `CHEST` com menu de 27 slots para guardar itens permanentemente no mundo.
2. **Arco e Flechas Funcionais para o Jogador**:
   - Craftar Arco (`BOW`) com 3 Gravetos e 3 Linhas de Teia.
   - Disparar flechas com o botão direito mirando na primeira pessoa!
3. **Creeper (Mob Icônico)**:
   - Mob silencioso que persegue o jogador, infla com contagem regressiva e explode abrindo crateras no cenário voxel.
4. **Ciclo de Cultivo e Agricultura (*Farming*)**:
   - Enxada de Madeira/Pedra/Ferro, arar terra, plantar sementes e colher Trigo para fazer Pão.
5. **Bioma de Taiga e Cavernas com Estalactites**:
   - Pinheiros gigantes e formações de estalactites rochosas no teto das cavernas subterrâneas.

---

*Documento gerado e mantido rigorosamente atualizado pelo assistente Antigravity para a versão v0.3.0.*
