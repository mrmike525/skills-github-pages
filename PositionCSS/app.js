const $ = (sel, root = document) => root.querySelector(sel);

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function px(n) {
  const v = Number(n);
  if (Number.isNaN(v)) return "0px";
  return `${v}px`;
}

function setReadout(preEl, lines) {
  if (!preEl) return;
  preEl.textContent = lines.filter(Boolean).join("\n");
}

/* ---------------- Page 1 ---------------- */

function initPage1() {
  const floatBox = $("#floatBox");
  const floatContainer = $("#floatContainer");
  const floatValue = $("#floatValue");
  const clearfixToggle = $("#clearfixToggle");

  const posBox = $("#posBox");
  const posStage = $("#posStage"); // exists for context; stage is relative in CSS
  const posValue = $("#posValue");
  const posTop = $("#posTop");
  const posRight = $("#posRight");
  const posBottom = $("#posBottom");
  const posLeft = $("#posLeft");

  const flexStage = $("#flexStage");
  const flexDisplay = $("#flexDisplay");
  const flexDirection = $("#flexDirection");
  const justifyContent = $("#justifyContent");
  const alignItems = $("#alignItems");
  const flexWrap = $("#flexWrap");
  const flexGap = $("#flexGap");

  const readout = $("#readout");

  function updateFloat() {
    if (!floatBox) return;
    floatBox.style.float = floatValue.value;
    floatContainer.classList.toggle("clearfix", clearfixToggle.checked);
  }

  function updatePosition() {
    if (!posBox) return;

    const v = posValue.value;
    posBox.style.position = v;

    // sticky needs a top to stick
    const topVal = px(posTop.value);

    // Only apply offsets for non-static (and sticky)
    const offsetsAllowed = v !== "static";

    posBox.style.top = offsetsAllowed ? topVal : "";
    posBox.style.right = offsetsAllowed ? px(posRight.value) : "";
    posBox.style.bottom = offsetsAllowed ? px(posBottom.value) : "";
    posBox.style.left = offsetsAllowed ? px(posLeft.value) : "";

    // If fixed, keep it inside view nicely
    if (v === "fixed") {
      posBox.style.zIndex = "9999";
    } else {
      posBox.style.zIndex = "";
    }
  }

  function updateFlex() {
    if (!flexStage) return;
    flexStage.style.display = flexDisplay.value;
    flexStage.style.flexDirection = flexDirection.value;
    flexStage.style.justifyContent = justifyContent.value;
    flexStage.style.alignItems = alignItems.value;
    flexStage.style.flexWrap = flexWrap.value;
    flexStage.style.gap = px(flexGap.value);
  }

  function updateReadout() {
    setReadout(readout, [
      `/* Float */`,
      `#floatBox { float: ${floatValue.value}; }`,
      `#floatContainer { clearfix: ${clearfixToggle.checked ? "on" : "off"}; }`,
      ``,
      `/* Position */`,
      `#posBox { position: ${posValue.value};`,
      posValue.value === "static"
        ? `  /* offsets ignored for static */`
        : `  top: ${px(posTop.value)}; right: ${px(posRight.value)}; bottom: ${px(posBottom.value)}; left: ${px(posLeft.value)};`,
      `}`,
      ``,
      `/* Flex */`,
      `#flexStage { display: ${flexDisplay.value}; flex-direction: ${flexDirection.value};`,
      `  justify-content: ${justifyContent.value}; align-items: ${alignItems.value};`,
      `  flex-wrap: ${flexWrap.value}; gap: ${px(flexGap.value)}; }`,
    ]);
  }

  function updateAll() {
    updateFloat();
    updatePosition();
    updateFlex();
    updateReadout();
  }

  [
    floatValue,
    clearfixToggle,
    posValue,
    posTop,
    posRight,
    posBottom,
    posLeft,
    flexDisplay,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    flexGap,
  ].forEach((el) => el && el.addEventListener("input", updateAll));

  updateAll();
}

/* ---------------- Page 2 ---------------- */

function initPage2() {
  const gridStage = $("#gridStage");
  const gridCols = $("#gridCols");
  const gridMin = $("#gridMin");
  const justifyItems = $("#justifyItems");
  const gridAlignItems = $("#gridAlignItems");
  const gridGap = $("#gridGap");

  const textTarget = $("#textTarget");
  const badge = $("#badge");
  const textAlign = $("#textAlign");
  const verticalAlign = $("#verticalAlign");

  const mqWidth = $("#mqWidth");
  const mqDemo = $("#mqDemo");
  const mqLabel = $("#mqLabel");

  const readout = $("#readout");

  function updateGrid() {
    if (!gridStage) return;
    const cols = Number(gridCols.value);
    const minW = Number(gridMin.value);
    gridStage.style.gridTemplateColumns = `repeat(${cols}, minmax(${minW}px, 1fr))`;
    gridStage.style.gap = px(gridGap.value);
    gridStage.style.justifyItems = justifyItems.value;
    gridStage.style.alignItems = gridAlignItems.value;
  }

  function updateText() {
    if (textTarget) textTarget.style.textAlign = textAlign.value;
    if (badge) badge.style.verticalAlign = verticalAlign.value;
  }

  function simBreakpoint(width) {
    if (width <= 540) return "sm";
    if (width <= 820) return "md";
    return "lg";
  }

  function updateMediaSim() {
    if (!mqWidth || !mqDemo) return;
    const w = clamp(Number(mqWidth.value), 320, 1100);
    const bp = simBreakpoint(w);
    mqDemo.dataset.sim = bp;

    if (mqLabel)
      mqLabel.textContent = `sim width: ${w}px → ${bp.toUpperCase()}`;
  }

  function updateReadout() {
    setReadout(readout, [
      `/* Grid */`,
      `#gridStage { grid-template-columns: ${gridStage?.style.gridTemplateColumns || "(default)"};`,
      `  gap: ${gridStage?.style.gap || "(default)"}; justify-items: ${gridStage?.style.justifyItems || "(default)"};`,
      `  align-items: ${gridStage?.style.alignItems || "(default)"}; }`,
      ``,
      `/* Text-align / Vertical-align */`,
      `#textTarget { text-align: ${textAlign.value}; }`,
      `#badge { vertical-align: ${verticalAlign.value}; }`,
      ``,
      `/* Media sim */`,
      `#mqDemo[data-sim] { data-sim: "${mqDemo?.dataset.sim}"; }`,
      `/* Real media queries also apply when resizing the browser */`,
    ]);
  }

  function updateAll() {
    updateGrid();
    updateText();
    updateMediaSim();
    updateReadout();
  }

  [
    gridCols,
    gridMin,
    justifyItems,
    gridAlignItems,
    gridGap,
    textAlign,
    verticalAlign,
    mqWidth,
  ].forEach((el) => el && el.addEventListener("input", updateAll));

  updateAll();
}

/* ---------------- Playground (Page 3) ---------------- */

function initPlayground() {
  const pgBox = $("#pgBox");
  const pgContainer = $("#pgContainer");
  const pgText = $("#pgText");
  const pgBadge = $("#pgBadge");

  const pgFloat = $("#pgFloat");
  const pgClearfix = $("#pgClearfix");

  const pgPos = $("#pgPos");
  const pgTop = $("#pgTop");
  const pgRight = $("#pgRight");
  const pgBottom = $("#pgBottom");
  const pgLeft = $("#pgLeft");

  const pgFlexStage = $("#pgFlexStage");
  const pgFlexDir = $("#pgFlexDir");
  const pgJustify = $("#pgJustify");
  const pgAlign = $("#pgAlign");
  const pgFlexGap = $("#pgFlexGap");

  const pgGridStage = $("#pgGridStage");
  const pgGridCols = $("#pgGridCols");
  const pgGridGap = $("#pgGridGap");
  const pgJustifyItems = $("#pgJustifyItems");
  const pgGridAlignItems = $("#pgGridAlignItems");

  const pgTextAlign = $("#pgTextAlign");
  const pgValign = $("#pgValign");

  const pgMqWidth = $("#pgMqWidth");
  const pgMqDemo = $("#pgMqDemo");
  const pgMqLabel = $("#pgMqLabel");

  const readout = $("#readout");

  function simBreakpoint(width) {
    if (width <= 540) return "sm";
    if (width <= 820) return "md";
    return "lg";
  }

  function updateFloat() {
    if (!pgBox) return;
    pgBox.style.float = pgFloat.value;
    pgContainer.classList.toggle("clearfix", pgClearfix.checked);
  }

  function updatePosition() {
    if (!pgBox) return;
    const v = pgPos.value;
    pgBox.style.position = v;

    const offsetsAllowed = v !== "static";
    pgBox.style.top = offsetsAllowed ? px(pgTop.value) : "";
    pgBox.style.right = offsetsAllowed ? px(pgRight.value) : "";
    pgBox.style.bottom = offsetsAllowed ? px(pgBottom.value) : "";
    pgBox.style.left = offsetsAllowed ? px(pgLeft.value) : "";

    if (v === "fixed") pgBox.style.zIndex = "9999";
    else pgBox.style.zIndex = "";
  }

  function updateFlex() {
    if (!pgFlexStage) return;
    pgFlexStage.style.display = "flex";
    pgFlexStage.style.flexDirection = pgFlexDir.value;
    pgFlexStage.style.justifyContent = pgJustify.value;
    pgFlexStage.style.alignItems = pgAlign.value;
    pgFlexStage.style.gap = px(pgFlexGap.value);
  }

  function updateGrid() {
    if (!pgGridStage) return;
    const cols = Number(pgGridCols.value);
    pgGridStage.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
    pgGridStage.style.gap = px(pgGridGap.value);
    pgGridStage.style.justifyItems = pgJustifyItems.value;
    pgGridStage.style.alignItems = pgGridAlignItems.value;
  }

  function updateText() {
    if (pgText) pgText.style.textAlign = pgTextAlign.value;
    if (pgBadge) pgBadge.style.verticalAlign = pgValign.value;
  }

  function updateMediaSim() {
    if (!pgMqWidth || !pgMqDemo) return;
    const w = clamp(Number(pgMqWidth.value), 320, 1100);
    const bp = simBreakpoint(w);
    pgMqDemo.dataset.sim = bp;
    if (pgMqLabel)
      pgMqLabel.textContent = `sim width: ${w}px → ${bp.toUpperCase()}`;
  }

  function updateReadout() {
    setReadout(readout, [
      `/* Target Box */`,
      `#pgBox { float: ${pgFloat.value}; position: ${pgPos.value};`,
      pgPos.value === "static"
        ? `  /* offsets ignored for static */`
        : `  top: ${px(pgTop.value)}; right: ${px(pgRight.value)}; bottom: ${px(pgBottom.value)}; left: ${px(pgLeft.value)};`,
      `}`,
      `#pgContainer { clearfix: ${pgClearfix.checked ? "on" : "off"}; }`,
      ``,
      `/* Flex */`,
      `#pgFlexStage { flex-direction: ${pgFlexDir.value}; justify-content: ${pgJustify.value}; align-items: ${pgAlign.value}; gap: ${px(pgFlexGap.value)}; }`,
      ``,
      `/* Grid */`,
      `#pgGridStage { grid-template-columns: ${pgGridStage?.style.gridTemplateColumns || "(default)"}; gap: ${pgGridStage?.style.gap || "(default)"};`,
      `  justify-items: ${pgJustifyItems.value}; align-items: ${pgGridAlignItems.value}; }`,
      ``,
      `/* Text */`,
      `#pgText { text-align: ${pgTextAlign.value}; }`,
      `#pgBadge { vertical-align: ${pgValign.value}; }`,
      ``,
      `/* Media sim */`,
      `#pgMqDemo[data-sim="${pgMqDemo?.dataset.sim}"]`,
    ]);
  }

  function updateAll() {
    updateFloat();
    updatePosition();
    updateFlex();
    updateGrid();
    updateText();
    updateMediaSim();
    updateReadout();
  }

  [
    pgFloat,
    pgClearfix,
    pgPos,
    pgTop,
    pgRight,
    pgBottom,
    pgLeft,
    pgFlexDir,
    pgJustify,
    pgAlign,
    pgFlexGap,
    pgGridCols,
    pgGridGap,
    pgJustifyItems,
    pgGridAlignItems,
    pgTextAlign,
    pgValign,
    pgMqWidth,
  ].forEach((el) => el && el.addEventListener("input", updateAll));

  updateAll();
}

/* ---------------- Boot ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "page1") initPage1();
  if (page === "page2") initPage2();
  if (page === "playground") initPlayground();
});
