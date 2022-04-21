<template>
  <div>
    <DruxtEntity
      type="node--article"
      :uuid="this.$route.params.uuid"
      mode="full"
    />
  </div>
</template>

<script>
export default {
  name: "NodePage",
};
</script>
