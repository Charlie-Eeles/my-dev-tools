<script setup>
import { ref, onMounted } from "vue";
import * as monaco from "monaco-editor";

const editorContainer = ref(null);
let leftModel, rightModel, diffEditor;

onMounted(() => setupMonaco());

function formatJson(model) {
  try {
    const formatted = JSON.stringify(JSON.parse(model.getValue()), null, 4);
    model.setValue(formatted);
  } catch (e) {
    alert("Invalid JSON. Please fix syntax errors before formatting.");
  }
}

function setupMonaco() {
  leftModel = monaco.editor.createModel("", "json");
  rightModel = monaco.editor.createModel("", "json");

  diffEditor = monaco.editor.createDiffEditor(editorContainer.value, {
    originalEditable: true,
    theme: "vs-dark",
    automaticLayout: true,
  });

  diffEditor.setModel({
    original: leftModel,
    modified: rightModel,
  });
}
</script>

<template>
  <div class="container">
    <div class="toolbar">
      <button @click="formatJson(leftModel)">Format left JSON</button>
      <RouterLink to="/">
        <button @click="">Home</button>
      </RouterLink>
      <button @click="formatJson(rightModel)">Format right JSON</button>
    </div>
    <div ref="editorContainer" class="editor-container"></div>
  </div>
</template>

<style scoped>
.container {
  background-color: #1e1e1e;
  height: 100vh;
}

.toolbar {
  display: flex;
  justify-content: center;
  padding: 10px;
  justify-content: space-between;
}

.editor-container {
  height: 90%;
  width: 100%;
  border: 1px solid black;
}
</style>
