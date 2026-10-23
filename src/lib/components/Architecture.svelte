<script>
  export let kind = 'rooms';
</script>

<div
  class="architecture"
  class:rooms={kind === 'rooms'}
  class:teams={kind === 'teams'}
  class:emulator={kind === 'emulator'}
  aria-label={kind === 'rooms'
    ? 'Architecture: clients connect to durable room state, with an outbox delivering shared results'
    : kind === 'teams'
      ? 'Architecture: Angular, ASP.NET Core application services, and SQL Server'
      : 'Architecture: CPU connects to memory, graphics, audio, and timer subsystems'}
  role="img"
>
  <div class="diagram-top">
    <span class="diagram-dots"><i></i><i></i><i></i></span><span
      >ARCHITECTURE SKETCH</span
    ><span>↗</span>
  </div>
  {#if kind === 'rooms'}
    <div class="room-clients">
      <span>CLIENT 01</span><span>CLIENT 02</span><span>CLIENT 03</span>
    </div>
    <div class="connect-three"><span></span><span></span><span></span></div>
    <div class="diagram-node primary-node">
      <span class="node-icon">&#123; &#125;</span>
      <div>
        <strong>One room. Shared state.</strong><small
          >Durable Object · SQLite</small
        >
      </div>
      <span class="live-dot"></span>
    </div>
    <div class="connector vertical"></div>
    <div class="room-bottom">
      <div class="diagram-node">
        <strong>Durable outbox</strong><small>retry-safe exports</small>
      </div>
      <span class="flow-arrow">→</span>
      <div class="diagram-node">
        <strong>D1</strong><small>shared results</small>
      </div>
    </div>
  {:else if kind === 'teams'}
    <div class="layer">
      <span class="layer-number">01</span>
      <div><strong>Angular</strong><small>Interface & interaction</small></div>
      <span class="layer-tag">CLIENT</span>
    </div>
    <div class="layer-link">
      <span>↓</span><small>authenticated requests</small>
    </div>
    <div class="layer primary-node">
      <span class="layer-number">02</span>
      <div>
        <strong>ASP.NET Core</strong><small>Ownership · rules · analysis</small>
      </div>
      <span class="layer-tag">API</span>
    </div>
    <div class="layer-link">
      <span>↓</span><small>EF Core repositories</small>
    </div>
    <div class="layer">
      <span class="layer-number">03</span>
      <div><strong>SQL Server</strong><small>Teams & Pokémon data</small></div>
      <span class="layer-tag">DATA</span>
    </div>
  {:else}
    <div class="cpu-row">
      <div class="cpu-chip">
        <span>EMULATION CORE</span><strong>SM83</strong><small>8-bit CPU</small>
      </div>
      <div class="cpu-notes">
        <span>registers</span><span>instructions</span><span>timing</span>
      </div>
    </div>
    <div class="bus"><span>MEMORY BUS</span><i></i></div>
    <div class="subsystems">
      <div><span>PPU</span><small>graphics</small></div>
      <div><span>APU</span><small>audio</small></div>
      <div><span>TIMER</span><small>clock</small></div>
    </div>
    <div class="test-caption">
      <span>✓</span> State checked against reference fixtures
    </div>
  {/if}
</div>

<style>
  .architecture {
    --d-ink: #23584b;
    --d-border: #c6dcd2;
    --d-tint: #e9f3ed;
    color: var(--d-ink);
    width: 100%;
    max-width: 490px;
    margin: auto;
    font-family: var(--font-mono);
    font-size: 11px;
  }
  .teams {
    --d-ink: #304e8e;
    --d-border: #c8d5eb;
    --d-tint: #e8eef9;
  }
  .emulator {
    --d-ink: #665186;
    --d-border: #d6cbe8;
    --d-tint: #f0eaf7;
  }
  .diagram-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 9px;
    letter-spacing: 0.08em;
    padding-bottom: 30px;
    opacity: 1;
  }
  .diagram-dots {
    display: flex;
    gap: 4px;
  }
  .diagram-dots i {
    height: 5px;
    width: 5px;
    border: 1px solid currentColor;
    border-radius: 50%;
  }
  .room-clients {
    display: flex;
    justify-content: space-around;
    gap: 10px;
  }
  .room-clients span {
    background: #ffffffad;
    border: 1px solid var(--d-border);
    border-radius: 6px;
    padding: 12px 9px;
    font-size: 10px;
    white-space: nowrap;
  }
  .connect-three {
    display: flex;
    justify-content: space-around;
    height: 29px;
  }
  .connect-three span {
    width: 1px;
    background: var(--d-border);
  }
  .diagram-node {
    background: #ffffffba;
    border: 1px solid var(--d-border);
    border-radius: 8px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex: 1;
  }
  .diagram-node strong,
  .layer strong {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.02em;
  }
  .diagram-node small,
  .layer small {
    font-size: 10px;
    opacity: 1;
  }
  .primary-node {
    background: var(--d-tint);
    border: 1px solid var(--d-border);
    box-shadow: 0 7px 16px #23342d06;
  }
  .diagram-node.primary-node {
    flex-direction: row;
    align-items: center;
    gap: 13px;
    padding: 19px;
  }
  .primary-node div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .node-icon {
    display: grid;
    place-items: center;
    width: 38px;
    height: 38px;
    background: #ffffffb3;
    border: 1px solid var(--d-border);
    border-radius: 8px;
    font-size: 19px;
  }
  .live-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #3f8066;
    margin-left: auto;
  }
  .connector.vertical {
    height: 24px;
    width: 1px;
    background: var(--d-border);
    margin: auto;
  }
  .room-bottom {
    display: flex;
    align-items: center;
    gap: 11px;
  }
  .room-bottom .diagram-node {
    padding: 14px;
  }
  .room-bottom strong {
    font-size: 12px;
  }
  .flow-arrow {
    font-size: 21px;
  }
  .layer {
    display: flex;
    align-items: center;
    gap: 15px;
    border: 1px solid var(--d-border);
    background: #ffffffb3;
    padding: 16px 17px;
    border-radius: 8px;
  }
  .layer.primary-node {
    background: var(--d-tint);
  }
  .layer > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .layer-number {
    font-size: 11px;
    opacity: 1;
  }
  .layer-tag {
    font-size: 9px;
    margin-left: auto;
    letter-spacing: 0.08em;
    border: 1px solid var(--d-border);
    border-radius: 3px;
    padding: 4px;
  }
  .layer-link {
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 6px 24px;
  }
  .layer-link span {
    font-size: 18px;
  }
  .layer-link small {
    font-size: 9px;
    opacity: 1;
  }
  .cpu-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  .cpu-chip {
    background: var(--d-tint);
    border: 1px solid var(--d-border);
    outline: 1px dashed var(--d-border);
    outline-offset: 5px;
    border-radius: 10px;
    padding: 19px 27px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .cpu-chip > span {
    font-size: 9px;
    letter-spacing: 0.1em;
  }
  .cpu-chip strong {
    font-size: 37px;
    font-weight: 500;
    letter-spacing: -0.05em;
  }
  .cpu-chip small {
    font-size: 10px;
  }
  .cpu-notes {
    display: flex;
    flex-direction: column;
    gap: 11px;
    font-size: 10px;
  }
  .cpu-notes span:before {
    content: '→';
    margin-right: 8px;
    opacity: 0.6;
  }
  .bus {
    padding: 26px 0 16px;
    text-align: center;
    position: relative;
    font-size: 9px;
    letter-spacing: 0.1em;
  }
  .bus:before {
    content: '';
    height: 21px;
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 1px solid var(--d-border);
  }
  .bus i {
    display: block;
    margin-top: 10px;
    border-top: 1px solid var(--d-border);
  }
  .subsystems {
    display: flex;
    justify-content: space-around;
    gap: 12px;
  }
  .subsystems div {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    border: 1px solid var(--d-border);
    background: #ffffffa3;
    border-radius: 6px;
    padding: 11px;
  }
  .subsystems small {
    font-size: 9px;
    opacity: 1;
  }
  .test-caption {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 9px;
    padding-top: 20px;
  }
  .test-caption > span {
    display: grid;
    place-items: center;
    border: 1px solid var(--d-border);
    border-radius: 50%;
    width: 15px;
    height: 15px;
  }
  @media (max-width: 420px) {
    .diagram-top {
      padding-bottom: 22px;
    }
    .room-clients span {
      font-size: 9px;
      padding: 11px 7px;
    }
    .diagram-node.primary-node {
      padding: 15px 10px;
    }
    .diagram-node strong {
      font-size: 12px;
    }
    .room-bottom .diagram-node {
      padding: 12px 8px;
    }
    .room-bottom strong {
      font-size: 10px;
    }
    .cpu-chip {
      padding: 17px 23px;
    }
    .test-caption {
      font-size: 9px;
    }
    .layer {
      padding: 12px;
    }
    .layer-tag {
      font-size: 9px;
    }
  }
</style>
