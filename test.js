
        const YT_ID = 'kv-_CezuTBg';
        const IC = {
            link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
            play: `<svg viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
            playD: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
            yt: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.4 3.6-6.4 3.6z"/></svg>`,
            extLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
            warn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
            target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
            bulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>`,
            ban: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
            check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
        };
        const CI = { '木工': '🪚', '裝潢': '🏠', '金屬加工': '⚙️', '園藝': '🌿', '營造': '🏗️', '通用': '🔧', '手作': '✂️', '汽車修護': '🚗', '汽車': '🚗', '機械': '⚙️', '油漆': '🎨', '石材': '🪨', '泥作': '🧱', '防護配件': '🦺', '戶外': '⛺', '拆除': '💥', '林業': '🌲', '水電工程': '💡', '收納系統': '📦', '水電': '🔌', '檢修': '🔩', '工安': '⚠️', '細部': '🔬', '工程': '🏗️', '清潔': '🧹', '測量': '📐' };

        // Manually mapped Unsplash fallback images for the presentation mode (since original Manus CDN URLs will expire)
        // The original URLs shown below are carefully selected substitutes matching the theme 
        const CHighResImgs = {
            '木工': 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=1200&q=80',
            '金屬加工': 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80',
            '園藝': 'https://images.unsplash.com/photo-1416879598555-520e5c8af4ce?w=1200&q=80',
            '營造': 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&q=80',
            '汽車': 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
            '通用工具': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&q=80',
            '通用': 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&q=80',
            '泥作': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
            '石材': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
            '水電工程': 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&q=80',
            '油漆': 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&q=80',
            '防護配件': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
            '收納系統': 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80',
        };

        let allTools = [], fl = { trade: '全部', usage: '全部', pain: '全部' }, vm = 'grid';
        function esc(s) { return s ? s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : '' }
        function ts(t) { const [m, s] = t.split(':').map(Number); return (m || 0) * 60 + (s || 0) }

        function updateTabVals() {
            // Update textual label
            const tText = fl.trade === '全部' ? '' : fl.trade;
            const uText = fl.usage === '全部' ? '' : fl.usage;
            const pText = fl.pain === '全部' ? '' : fl.pain;

            document.getElementById('val-trade').textContent = tText;
            document.getElementById('val-usage').textContent = uText;
            document.getElementById('val-pain').textContent = pText;

            document.querySelectorAll('.f-tab').forEach(t => {
                const k = t.dataset.target.replace('fg-', '');
                const hasSel = fl[k] !== '全部';
                t.classList.toggle('has-sel', hasSel);
                // Also toggle visibility directly to fully hide the pill if empty
                t.querySelector('.f-val').style.display = hasSel ? '' : 'none';
            });
        }

        function filtered() { return allTools.filter(t => { if (fl.trade !== '全部' && !t.trade.includes(fl.trade)) return false; if (fl.usage !== '全部' && !t.usage.includes(fl.usage)) return false; if (fl.pain !== '全部' && !t.pain.includes(fl.pain)) return false; return true }) }
        function render() {
            const tools = filtered(); document.getElementById('tcnt').textContent = `符合項: ${tools.length} / ${allTools.length}`;
            updateTabVals();
            if (vm === 'grid') { renderGrid(tools); document.getElementById('grid').style.display = 'grid'; document.getElementById('list').style.display = 'none' }
            else { renderList(tools); document.getElementById('grid').style.display = 'none'; document.getElementById('list').style.display = 'block' }
        }
        function renderGrid(tools) {
            const g = document.getElementById('grid'); if (!tools.length) { g.innerHTML = '<div class="empty">找不到符合條件的工具 🔍</div>'; return }
            g.innerHTML = tools.map((t, i) => { const trades = t.trade.split(/\s*\/\s*/).filter(Boolean); return `<div class="card"><div class="card-thumb-wrap">${t.thumb ? `<img class="card-thumb" src="${t.thumb}" alt="${esc(t.name)}" loading="lazy">` : '<div class="card-thumb"></div>'}<div class="card-price">${esc(t.price)}</div><div class="card-time">${esc(t.time)}</div><div class="card-overlay"><button class="card-action gif-act" onclick="showGif(${i})">${IC.play} GIF</button><button class="card-action yt-act" onclick="showYT(${i})">${IC.yt} 影片</button></div></div><div class="card-body"><div class="card-top"><div class="card-name">${esc(t.name)}</div>${t.link && t.link !== '-' ? `<a class="card-link" href="${esc(t.link)}" target="_blank" rel="noopener">${IC.link}</a>` : ''}</div><div class="tags">${trades.map(s => `<span class="tag tag-t">${esc(s)}</span>`).join('')}${t.usage && t.usage !== '-' ? `<span class="tag tag-u">${esc(t.usage)}</span>` : ''}${t.pain && t.pain !== '-' ? `<span class="tag tag-p">${esc(t.pain)}</span>` : ''}</div><div class="card-desc">${esc(t.desc)}</div><div class="card-meta">${t.alt && t.alt !== '-' ? `<div class="card-meta-row"><span class="card-meta-label">替代方案</span><span class="card-meta-val">${esc(t.alt)}</span></div>` : ''}${t.cost && t.cost !== '-' ? `<div class="card-meta-row"><span class="card-meta-label cost">相對成本</span><span class="card-meta-val">${esc(t.cost)}</span></div>` : ''}</div></div></div>` }).join('')
        }
        function renderList(tools) {
            const el = document.getElementById('list'); if (!tools.length) { el.innerHTML = '<div class="empty">找不到符合條件的工具 🔍</div>'; return }
            el.innerHTML = `<table><thead><tr><th>時間</th><th>產品名稱</th><th>工種</th><th>用途</th><th>售價</th><th>成本痛點</th><th>操作</th></tr></thead><tbody>${tools.map((t, i) => { const trades = t.trade.split(/\s*\/\s*/).filter(Boolean); return `<tr><td class="l-time">${esc(t.time)}</td><td><div class="l-name">${esc(t.name)}</div><div class="l-desc">${esc(t.desc)}</div></td><td class="l-trade">${trades.map(s => `<span class="tag tag-t">${esc(s)}</span>`).join(' ')}</td><td>${esc(t.usage)}</td><td class="l-price">${esc(t.price)}</td><td>${t.pain && t.pain !== '-' ? `<span class="tag tag-p">${esc(t.pain)}</span>` : ''}</td><td class="l-actions"><button class="l-act" onclick="showGif(${i})">${IC.playD}</button><button class="l-act yt" onclick="showYT(${i})">${IC.yt}</button>${t.link && t.link !== '-' ? `<a class="l-act" href="${esc(t.link)}" target="_blank">${IC.link}</a>` : ''}</td></tr>` }).join('')}</tbody></table>`
        }

        let curIdx = 0;
        function showGif(i) { curIdx = i; const t = allTools[i]; if (!t) return; document.getElementById('mtitle').textContent = t.name; document.getElementById('mgif').src = t.gif || ''; document.getElementById('modal').classList.add('show'); document.body.style.overflow = 'hidden' }
        function closeModal() { document.getElementById('modal').classList.remove('show'); document.getElementById('mgif').src = ''; document.body.style.overflow = '' }
        document.getElementById('mclose').onclick = closeModal;
        document.getElementById('modal').onclick = e => { if (e.target === e.currentTarget) closeModal() };
        document.getElementById('m-yt-btn').onclick = () => { closeModal(); showYT(curIdx) };

        function showYT(i) { const t = allTools[i]; if (!t) return; document.getElementById('ytIframe').src = `https://www.youtube.com/embed/${YT_ID}?start=${ts(t.time)}&autoplay=1`; document.getElementById('ytModal').classList.add('show'); document.body.style.overflow = 'hidden' }
        function closeYT() { document.getElementById('ytModal').classList.remove('show'); document.getElementById('ytIframe').src = ''; document.body.style.overflow = '' }
        document.getElementById('ytClose').onclick = closeYT;
        document.getElementById('ytModal').onclick = e => { if (e.target === e.currentTarget) closeYT() };
        document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeYT() } });

        function initFilters() {
            const s = { trade: new Set(), usage: new Set(), pain: new Set() };
            allTools.forEach(t => {
                t.trade.split(/\s*\/\s*/).forEach(x => { if (x.trim()) s.trade.add(x.trim()) });
                if (t.usage && t.usage !== '-') s.usage.add(t.usage);
                if (t.pain && t.pain !== '-') s.pain.add(t.pain)
            });
            mkTags('fg-trade', 'trade', ['全部', ...[...s.trade].sort()]);
            mkTags('fg-usage', 'usage', ['全部', ...[...s.usage].sort()]);
            mkTags('fg-pain', 'pain', ['全部', ...[...s.pain].sort()]);

            // Setup tabs
            document.querySelectorAll('.f-tab').forEach(b => {
                b.onclick = () => {
                    document.querySelectorAll('.f-tab').forEach(x => x.classList.remove('active'));
                    b.classList.add('active');
                    document.querySelectorAll('.fgroup').forEach(g => g.classList.remove('active'));
                    document.getElementById(b.dataset.target).classList.add('active');
                };
            });
        }
        function mkTags(id, key, items) { const c = document.getElementById(id); items.forEach(item => { const b = document.createElement('button'); b.className = 'ftag' + (item === fl[key] ? ' active' : ''); b.textContent = item; b.onclick = () => { fl[key] = item; c.querySelectorAll('.ftag').forEach(x => x.classList.remove('active')); b.classList.add('active'); render() }; c.appendChild(b) }) }
        document.querySelectorAll('.col-btn').forEach(b => { b.onclick = () => { document.querySelectorAll('.col-btn').forEach(x => x.classList.remove('active')); b.classList.add('active'); document.getElementById('grid').style.setProperty('--cols', b.dataset.c) } });
        document.querySelectorAll('.vt-btn').forEach(b => { b.onclick = () => { document.querySelectorAll('.vt-btn').forEach(x => x.classList.remove('active')); b.classList.add('active'); vm = b.dataset.m; render() } });
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.onclick = () => {
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
                const v = btn.dataset.v; const hdr = document.getElementById('hdr');
                hdr.classList.toggle('dark', v === 'pres');
                document.body.style.background = v === 'pres' ? '#0b0e14' : '';
                document.getElementById('grid').style.display = v === 'db' ? (vm === 'grid' ? 'grid' : 'none') : 'none';
                document.getElementById('list').style.display = v === 'db' && vm === 'list' ? 'block' : 'none';
                document.getElementById('pview').classList.toggle('active', v === 'pres');
                document.getElementById('fpanel').style.display = v === 'db' ? '' : 'none';
                if (v === 'pres') renderPres(); if (v === 'db') render();
            }
        });

        /* ── Presentation (Manus-style) ── */
        function renderPres() {
            // Group by primary trade
            const groups = {};
            allTools.forEach(t => {
                const cats = t.trade.split(/\s*\/\s*/);
                const primary = cats[0].trim();
                if (!groups[primary]) groups[primary] = [];
                groups[primary].push(t);
            });

            const sidebarHtml = `<div class="p-sidebar"><div class="ps-title">目錄導覽</div>${Object.keys(groups).map((cat, idx) => `<a href="#cat-${idx}" class="ps-link">${CI[cat] || '🔧'} ${esc(cat)}</a>`).join('')}</div>`;

            const contentHtml = `<div class="pview-content">${Object.entries(groups).map(([cat, tools], idx) => {
                // Pick the HighRes image based on the category name
                const bgImg = CHighResImgs[cat] || 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&q=80';

                // AI Designer Insight Logic
                const exTool = tools[0]?.name || '現代專屬機具';
                const exTool2 = tools[1]?.name || '高效夾具';

                const getInsight = (c) => {
                    const map = {
                        '木工裝潢': {
                            o: `現代木工面臨最大的挑戰在於「非標準化地形」與「收邊精度」。過去依賴手工紙板打版或目視切割，容易因人為手感導致密合度不佳。例如導入 ${esc(exTool)} ${tools[1] ? '或 ' + esc(exTool2) : ''} 等輔助定位系統，能將「依賴經驗的手感」轉化為「可被精確複製的標準化動作」，大幅提升最終成品的精緻度。`,
                            a: '應避免「純手作才叫職人精神」的迷思，過度迷信個人經驗而抗拒引進標準化輔助治具，將導致施工品質無法隨人員變動而穩定輸出。'
                        },
                        '水電工程': {
                            o: `水電佈線與管路安裝高度依賴現場環境的適應力，傳統上經常需要破壞性施工或在狹小空間內進行盲作業。透過導入如 ${esc(exTool)} 等測量或鑽孔夾具，我們能將施工模式從「試錯與事後修補」升級為「事前定錨與精準破壞」，有效降低災難性的重工風險。`,
                            a: '應避免「不管三七二十一先打再說」的粗放思維，忽略事前精準探測與治具導引能帶來的巨大重工成本節約。'
                        },
                        '金屬加工': {
                            o: `金屬加工的痛點在於處理高硬度材料時所伴隨的「危險粉塵」與「高溫熱變形」。使用傳統砂輪粗磨難以保證表面完整性。觀察像 ${esc(exTool)} 這類現代冷態處理或精密研磨技術，它們重新定義了介入方式，在確保材料強度的同時，實現了更安全的低塵工作場域。`,
                            a: '應避免「暴力破壞」與「粉塵高溫不可避免」的傳統觀念，容忍有害施工環境不僅危害從業人員健康，更降低了精密金屬構件的壽命。'
                        },
                        '泥作打除': {
                            o: `泥作與打除常被視為高勞力密集且粗獷的工種。然而，破壞的「邊界控制」直接決定了下個修補工班的成敗。引入帶有減震技術或定規的 ${esc(exTool)}，是將這項粗活細緻化的關鍵。它在快速瓦解目標物的同時保護了周邊結構，使勞動力得以從高強度的震動疲勞中釋放。`,
                            a: '應避免「靠蠻力解決一切」的暴力思維，缺乏邊境控制的破壞會對建築結構體造成不可逆的隱患，並加劇人員職業傷害。'
                        },
                        '園藝農林': {
                            o: `戶外場域往往受限於動力來源與環境障礙。傳統燃油農機噪音大且保養繁瑣，而手持砍伐則極耗體力。導入如 ${esc(exTool)} 等高扭力無刷或特規除草切割機具，能夠以極低的操作負擔，提供等同甚至超越燃油機具的淨空效率，實現綠色、輕量化的作業革命。`,
                            a: '應避免「燃油機具絕對優勢」與「靠體力硬幹」的舊石器思維，忽視了現代無刷電機與輕量化刀具帶來的指數型勞力解放。'
                        },
                        '通用與配件': {
                            o: `配件看似微小，卻往往是決定工程順暢度的最後一哩路。以 ${esc(exTool)} 為例，這類支援型工具將通用電鑽或機具的功能延伸，補足了死角施工與特殊角度的缺陷，將原本可能需要妥協的施工精度推向極致完美。`,
                            a: '應避免「一招半式闖天下」的思維，忽略了微小專用配件能在關鍵時刻爆發出的絕對優勢。'
                        }
                    };
                    return map[c] || {
                        o: `傳統施作方式常常因為工具的泛用性而妥協了執行的精準度，將大量的時間消耗在「準備、對位與反覆修整」等非核心價值的環節上。以 ${esc(exTool)} 為例，其設計思維是透過針對單一痛點的深度優化，以最少的操作步驟達到最高精準度。這種從「依賴手藝」到「依賴系統」的轉變，是提升整體工程可靠度的關鍵。`,
                        a: `應避免「一套通用工具應付到底」的妥協思維，忽視了在特定工序中，導入專用設計能帶來的指數級效率提升與防呆保護。`
                    };
                };

                const insight = getInsight(cat);

                // Content folding rendering logic.
                const renderList = (items, fallback) => {
                    if (!items.length) return `<ul class="pcat-list"><li>${fallback}</li></ul>`;
                    const listHtml = items.map(t => '<li>' + esc(t) + '</li>').join('');
                    const moreBtn = items.length > 5 ? `<button class="pcat-list-more" onclick="const p=this.previousElementSibling; const isExp = p.dataset.expanded === 'true'; p.dataset.expanded = String(!isExp); this.innerText = isExp ? '展開其餘 ${items.length - 5} 項...' : '折疊顯示';">展開其餘 ${items.length - 5} 項...</button>` : '';
                    return `<ul class="pcat-list" data-expanded="false">${listHtml}</ul>${moreBtn}`;
                };

                const costHtml = renderList(tools.map(t => t.cost).filter(c => c && c !== '-'), '施工效率與品質不穩定');
                const descHtml = renderList(tools.map(t => t.desc), '提升效率');

                return `
                        < div class="pcat" id = "cat-${idx}" >
  <div class="pcat-banner">
    <div class="pcat-banner-bg" style="background-image:url('${bgImg}')"></div>
    <div class="pcat-banner-content">
      <div class="pcat-icon">${CI[cat] || '🔧'}</div>
      <div>
        <div class="pcat-title">${esc(cat)}</div>
        <div class="pcat-count">${tools.length} 項相關工具</div>
      </div>
    </div>
  </div>
  <div class="pcat-grid">
    <div class="pcat-card red-card"><div class="pcat-card-title red">${IC.warn} 需要解決的問題</div>${costHtml}</div>
    <div class="pcat-card green-card"><div class="pcat-card-title green">${IC.target} 使用工具的效益</div>${descHtml}</div>
    <div class="pcat-card yellow-card" style="grid-column: 1 / -1;"><div class="pcat-card-title yellow">${IC.bulb} 觀察與思考</div>
      <div style="font-size: 14px; color: rgba(255,255,255,0.8); line-height: 1.8; padding: 4px 8px;">
        ${insight.o}
      </div>
    </div>
    <div class="pcat-card red-card" style="grid-column: 1 / -1;"><div class="pcat-card-title red">${IC.ban} 應避免的思維</div>
      <div style="font-size: 14px; color: #fca5a5; line-height: 1.8; padding: 4px 8px;">
        ${insight.a}
      </div>
    </div>
  </div>
</div > `
            }).join('')}</div>`;

            document.getElementById('pview').innerHTML = `<div class="pview-container">${contentHtml}${sidebarHtml}</div>`;

            // Highlight sidebar on scroll
            setTimeout(() => {
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        const id = entry.target.getAttribute('id');
                        if (entry.intersectionRatio > 0) {
                            document.querySelectorAll('.ps-link').forEach(l => l.classList.remove('active'));
                            document.querySelector(`.ps-link[href="#${id}"]`)?.classList.add('active');
                        }
                    });
                }, { rootMargin: '0px 0px -80% 0px' });
                document.querySelectorAll('.pcat').forEach(section => observer.observe(section));
            }, 100);
        }

        (async () => {
            try { const data = await (await fetch('data.json')).json(); allTools = data.tools; initFilters(); render() }
            catch (e) { document.getElementById('grid').innerHTML = `<div class="empty">無法載入 data.json：${esc(e.message)}<br>請先執行 <code>python generate_data.py</code></div>` }
        })();
    