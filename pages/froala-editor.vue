<template>
  <froala :tag="'textarea'" :config="config" v-model="model" :toolbar-buttons="toolbarButtons"
  :emoticons-step="emoticonsStep"
  :emoticons-set="emoticonsSet"
  ></froala>
</template>

<script>
import VueFroala from "vue-froala-wysiwyg";

export default {
  data() {
    return {
      config: {
        events: {
          "froalaEditor.initialized": function() {
            console.log("initialized");
          }
        }
      },
      model: "Edit Your Content Here!",

      toolbarButtons: [
        "bold",
        "italic",
        "underline",
        "strikeThrough",
        "emoticons",
        "|",
        "paragraphFormat",
        "align",
        "undo",
        "redo",
        "html"
      ],
      emoticonsStep: 4,
      emoticonsSet: [
        { code: "1f600", desc: "Grinning face" },
        { code: "1f601", desc: "Grinning face with smiling eyes" },
        { code: "1f602", desc: "Face with tears of joy" },
        { code: "1f603", desc: "Smiling face with open mouth" },
        {
          code: "1f604",
          desc: "Smiling face with open mouth and smiling eyes"
        },
        { code: "1f605", desc: "Smiling face with open mouth and cold sweat" },
        {
          code: "1f606",
          desc: "Smiling face with open mouth and tightly-closed eyes"
        },
        { code: "1f607", desc: "Smiling face with halo" }
      ]
    };
  }
};
</script>