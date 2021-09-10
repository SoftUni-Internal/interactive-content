[slide]
# Html Test

[html]
<style>
  . this-is-custom-element {
      background-color: yellow;
   }
   .pull-left {
       float: left;
   }
</style>
<div class="this-is-custom-element">
  <div class="pull-left">This is left</div>
</div>
<script>
  document.querySelector('.this-is-custom-element')
       .addEventListener('click', () => { alert('It works') });
</script>
[/html]

[/slide]