document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.createElement('div');
  gridContainer.className = 'ambient-grid';
  document.body.prepend(gridContainer);
  
  const cursor = document.createElement('div');
  cursor.className = 'ambient-cursor';
  gridContainer.appendChild(cursor);

  const lines = [];
  // Use fewer lines for cleaner aesthetics
  const V_LINES = 12;
  const H_LINES = 8;

  for (let i = 0; i < V_LINES; i++) {
    const line = document.createElement('div');
    line.className = 'ambient-line vertical';
    const pos = (i + 1) * (100 / (V_LINES + 1));
    line.style.left = `${pos}%`;
    line._pos = pos;
    line._type = 'v';
    gridContainer.appendChild(line);
    lines.push(line);
  }

  for (let i = 0; i < H_LINES; i++) {
    const line = document.createElement('div');
    line.className = 'ambient-line horizontal';
    const pos = (i + 1) * (100 / (H_LINES + 1));
    line.style.top = `${pos}%`;
    line._pos = pos;
    line._type = 'h';
    gridContainer.appendChild(line);
    lines.push(line);
  }

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  async function runAnimation() {
    let cursorX = gridContainer.clientWidth / 2;
    let cursorY = gridContainer.clientHeight / 2;

    while (true) {
      if (document.hidden) {
        await sleep(1000);
        continue;
      }

      const line = lines[Math.floor(Math.random() * lines.length)];
      const isV = line._type === 'v';
      const ww = gridContainer.clientWidth;
      const wh = gridContainer.clientHeight;
      
      let targetX, targetY;
      if (isV) {
        targetX = (line._pos / 100) * ww;
        targetY = Math.max(wh * 0.1, Math.min(wh * 0.9, cursorY + (Math.random() - 0.5) * 400));
      } else {
        targetX = Math.max(ww * 0.15, Math.min(ww * 0.85, cursorX + (Math.random() - 0.5) * 400));
        targetY = (line._pos / 100) * wh;
      }

      // 1. Move cursor to line seamlessly
      cursor.style.transition = 'left 1.2s cubic-bezier(0.25, 1, 0.5, 1), top 1.2s cubic-bezier(0.25, 1, 0.5, 1), margin 0.3s, opacity 0.3s';
      cursor.style.left = `${targetX}px`;
      cursor.style.top = `${targetY}px`;
      
      await sleep(1300);
      
      // 2. Select line (change to resize cursor)
      cursor.classList.add(isV ? 'resize-h' : 'resize-v');
      line.classList.add('active');
      line.style.transitionInfo = 'left 1.2s cubic-bezier(0.4, 0, 0.2, 1), top 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
      
      await sleep(400);

      // 3. Drag line to new coord
      const delta = (Math.random() - 0.5) * 12; // move by up to 6%
      line._pos = Math.max(5, Math.min(95, line._pos + delta)); 
      
      if (isV) {
        targetX = (line._pos / 100) * ww;
        line.style.left = `${line._pos}%`;
        cursor.style.left = `${targetX}px`;
      } else {
        targetY = (line._pos / 100) * wh;
        line.style.top = `${line._pos}%`;
        cursor.style.top = `${targetY}px`;
      }
      
      cursorX = targetX;
      cursorY = targetY;

      await sleep(1400);

      // 4. Unselect line and pause
      cursor.classList.remove('resize-h', 'resize-v');
      line.classList.remove('active');
      
      await sleep(1200);
    }
  }

  // Start automation
  setTimeout(runAnimation, 1500);
});
