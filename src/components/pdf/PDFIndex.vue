<template>
  <div id="pdfvuer">
    <pdf
      :src="pdfdata"
      v-for="i in numPages"
      :key="i"
      :id="i"
      :page="i"
      :scale.sync="scale"
      :annotation="true"
      :resize="true"
      @link-clicked="handle_pdf_link"
    >
      <template slot="loading"> loading content here... </template>
    </pdf>
  </div>
</template>

<script>
import pdfvuer from "pdfvuer";
export default {
  name: "PDFIndex",
  components: { pdf: pdfvuer },
  data() {
    return {
      page: 1,
      numPages: 0,
      pdfdata: undefined,
      errors: [],
      scale: "100%",
      isSticky: true,
    };
  },
  computed: {
    formattedZoom() {
      return Number.parseInt(this.scale * 100);
    },
  },
  mounted() {
    this.getPdf();
  },

  methods: {
    handle_pdf_link(params) {
      // Scroll to the appropriate place on our page - the Y component of
      // params.destArray * (div height / ???), from the bottom of the page div
      const page = document.getElementById(String(params.pageNumber));
      page.scrollIntoView();
    },
    getPdf(fileName = "/pdf/nationStates.pdf") {
      const self = this;
      self.pdfdata = pdfvuer.createLoadingTask(fileName);
      self.pdfdata.then((pdf) => {
        self.numPages = pdf.numPages;
      });
    },
  },
};
</script>

<style scoped src="pdfvuer/dist/pdfvuer.css"></style>
<style lang="css" scoped>
#buttons {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
/* Page content */
.content {
  padding: 16px;
}
</style>
