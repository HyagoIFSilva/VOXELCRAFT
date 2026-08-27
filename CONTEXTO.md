# CONTEXTO GLOBAL DO PROJETO: VOXELCRAFT 3D

Este documento é a referência técnica e de arquitetura central do **VoxelCraft**. Ele foi elaborado para que qualquer inteligência artificial, agente ou desenvolvedor humano possa se orientar imediatamente, compreender o código-fonte, respeitar os padrões estabelecidos e continuar o desenvolvimento a partir do ponto atual.

---

## 1. Visão Geral do Projeto

O **VoxelCraft** é um jogo sandbox voxel 3D no estilo Minecraft clássico, desenvolvido para rodar com alta performance e estética moderna diretamente no navegador web.

- **Stack Tecnológico**:
  - **Linguagem**: JavaScript (ES Modules modernos).
  - **Renderizador 3D**: [Three.js](https://threejs.org/) (versão `^0.170.0`).
  - **Build Tool / Dev Server**: [Vite](https://vite.dev/) (`^6.0.0`).
  - **Áudio**: Web Audio API sintetizada proceduralmente (zero dependência de arquivos externos).
  - **Interface**: HTML5 + CSS3 (Glassmorphism, tipografia Outfit e JetBrains Mono).

---

## 2. Estrutura de Diretórios e Arquivos

```
c:\Users\gabri\jogo\
├── client/
│   ├── index.html                 # Ponto de entrada HTML, estilos CSS e canvas
│   └── src/
│       ├── main.js                # Bootstrap e loop central do jogo
│       ├── engine/
│       │   ├── camera.js          # Câmera FPS, Pointer Lock, yaw/pitch
│       │   ├── input.js           # Gerenciador de eventos de teclado
│       │   ├── interaction.js     # Quebra/colocação de blocos e combate a mobs
│       │   ├── loop.js            # Game Loop baseado em requestAnimationFrame
│       │   ├── raycast.js         # Raycaster DDA através da grade voxel
│       │   └── soundFx.js         # Sintetizador procedural Web Audio API
│       ├── entities/
│       │   ├── player.js          # Física AABB, pulo, voo 3x Espaço, dano de queda
│       │   ├── hand.js            # Braço 3D em primeira pessoa, empunhadura e animações
│       │   └── mobManager.js      # Sistema de mobs (IA, modelos 3D, Porco, Zumbi)
│       ├── rendering/
│       │   ├── sceneSetup.js      # Criação de Renderer, Scene, Luzes, Fog
│       │   ├── blockPreview.js    # Modelos 3D de blocos e armas segurados na mão
│       │   ├── particles.js       # Sistema de partículas 3D (mineração e combate)
│       │   └── textures/
│       │       ├── textureGenerator.js # Gerador procedural de texturas 16x16
│       │       └── textureAtlas.js     # Atlas de texturas 4x4 (64x64) e UVs
│       ├── ui/
│       │   ├── hud.js             # Overlay de FPS, Coordenadas XYZ, Bioma e Voo
│       │   ├── hotbar.js          # Barra rápida inferior sincronizada
│       │   ├── inventory.js       # Inventário completo estilo Minecraft (Tecla E)
│       │   ├── health.js          # Barra de corações e vinheta de dano
│       │   └── blockIcon.js       # Gerador de ícones isométricos e 2D de itens
│       └── world/
│           ├── blockTypes.js      # Registro de tipos de blocos, armas e itens
│           ├── chunk.js           # Volume 16x64x16 de blocos e geração de mesh
│           └── worldManager.js    # Biomas procedurais e streaming infinito
├── package.json                   # Dependências e scripts npm
├── vite.config.js                 # Configuração do Vite
└── CONTEXTO.md                    # Documento mestre de arquitetura
```

---

## 3. Convenções de Coordenadas e Física

1. **Escala**:
   - $1 \text{ bloco} = 1.0 \times 1.0 \times 1.0 \text{ unidade no Three.js}$.
   - Posição dos blocos: inteiros discretos `(x, y, z)`.
   - Voxel $(x, y, z)$ ocupa o volume de $[x, x+1] \times [y, y+1] \times [z, z+1]$.
2. **Jogador (`player.js`)**:
   - Raio horizontal: `HALF_W = 0.3`.
   - Altura total: `HEIGHT = 1.8`.
   - Altura dos olhos da câmera: `EYE = 1.62` acima dos pés (`pos.y`).
   - Posição da câmera: `camera.position.set(pos.x, pos.y + EYE, pos.z)`.
3. **Vetores de Movimento**:
   - Frente (<kbd>W</kbd>): $\vec{F} = (-\sin(\text{yaw}), -\cos(\text{yaw}))$.
   - Trás (<kbd>S</kbd>): $-\vec{F}$.
   - Direita (<kbd>D</kbd>): $\vec{R} = (\cos(\text{yaw}), -\sin(\text{yaw}))$.
   - Esquerda (<kbd>A</kbd>): $-\vec{R}$.
4. **Voo e Pulo**:
   - Pulo: <kbd>ESPAÇO</kbd> com Jump Buffer e Coyote Time.
   - Voo: Ativado/desativado ao pressionar <kbd>ESPAÇO</kbd> **3 vezes seguidas** em menos de 0.55s.
   - Dano de Queda: Quedas de até 3 blocos são seguras; acima disso, $\text{dano} = \lfloor \text{altura} - 3 \rfloor \times 1.5$.

---

## 4. Atlas de Texturas e Renderização

- **Atlas**: Grade uniforme $4 \times 4$ de texturas $16 \times 16$ pixels em um canvas de $64 \times 64$ pixels.
- **Filtro WebGL**: `NearestFilter` com `generateMipmaps = false` e `sRGBColorSpace`.
- **UV Mapping**: Cada face possui mapeamento exato sem sangramento de pixels (*bleed-free*).

---

## 5. Sistema de Biomas Procedurais e Mundo Infinito

- **Biomas Atuais**:
  1. `Biome.PLAINS`: Planícies/florestas verdes com árvores de carvalho.
  2. `Biome.DESERT`: Dunas onduladas de areia dourada.
  3. `Biome.SNOWY_MOUNTAINS`: Picos elevados (acima de 45 blocos) com neve e pinheiros.
  4. `Biome.OCEAN`: Praias de areia ao nível do mar (`y = 18`) e águas profundas.
- **Streaming de Chunks**:
  - `RENDER_RADIUS = 5` (11x11 chunks ativos ao redor do jogador).
  - `UNLOAD_RADIUS = 7` (descarrega e libera memória de chunks distantes).
  - Chunks novos são criados e renderizados incrementalmente (até 2 por frame) para manter 60 FPS estáveis.

---

## 6. Mobs e Combate

- **Mobs Atuais (`mobManager.js`)**:
  - `MobType.PIG` (Pacífico): Vagueia, foge ao ser atacado, dropa costela de porco.
  - `MobType.ZOMBIE` (Hostil): Detecta o jogador até 18 blocos, persegue e ataca corpo a corpo.
- **Combate (`interaction.js`)**:
  - Botão Esquerdo ataca mobs no raio de alcance com a arma equipada.
  - Espada de Ferro causa 7 de dano + knockback forte.
  - Punho causa 2 de dano + knockback padrão.
  - Mobs piscam em vermelho (*Damage Flash*) e soltam partículas de impacto.

---

## 7. Sistema de Inventário

- **Atalho**: Tecla <kbd>E</kbd> abre e fecha a interface.
- **Estrutura**:
  - 9 Slots de Hotbar (índices `0..8`).
  - 27 Slots de Armazenamento Geral (índices `9..35`).
- **Interação**: Clique em um slot para pegar o item no cursor e clique em outro para mover ou trocar.

---

## 8. Backlog e Sugestões de Próximos Passos

Caso deseje continuar expandindo o jogo em sessões futuras, aqui estão as metas recomendadas:
1. **Sistema de Crafting (Bancada de Trabalho 3x3 e Fabricação Básica 2x2)**.
2. **Ciclo Dia/Noite com Sol, Lua e Iluminação Dinâmica**.
3. **Novos Mobs (ex: Esqueleto arqueiro que atira flechas, Creeper que explode, Ovelha com lã)**.
4. **Armaduras (Capacete, Peitoral, Calça e Botas)**.
5. **Sistema de Sons de Passos por tipo de bloco (Grama, Pedra, Areia, Madeira, Água)**.
6. **Sistema de Salvamento no LocalStorage (Salvar mundo e inventário do jogador)**.

---

*Documento gerado e mantido atualizado pelo assistente Antigravity.*
