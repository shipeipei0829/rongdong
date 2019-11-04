<template>
      <div class='dalete' :style="{
       'width':width,
      'height':height,
      'background':bgcolor,
      'border-adius':borderadius,
      'padding-top':'padding_top',
      'padding-bottom':'padding_bottom',
      'color':'color'
  }">
            <p>{{valuea}}</p>
            <p>{{valueb}}</p>
      </div>
</template>

<script>
      export default {
            name: "firsthead",
            data() {
                  return {

                  };
            },
            props: {
                  valuea: {
                        type: String,
                        default: '',
                  },
                  valueb: {
                        type: String,
                        default: '',
                  },
                  width: {
                        type: String,
                        default: ''
                  },
                  height: {
                        type: String,
                        default: ''
                  },
                  borderadius: {
                        type: String,
                        default: ''
                  },
                  bgcolor: {
                        type: String,
                        default: ' '
                  },
                  padding_bottom: {
                        type: String,
                        default: ' '
                  },
                  padding_top: {
                        type: String,
                        default: ' '
                  },
                  color: {
                        type: String,
                        default: ' '
                  }
            },
            methods: {

            },
            mounted() {

            },
            created() {

            },
      };
</script>

<style>
      .dalete {
            background: #E72D2D;
            color: #FFFFFF;
            font-size: 0.3rem;
            font-weight: bold;
            padding: 0.26rem 0rem;
      }
</style>