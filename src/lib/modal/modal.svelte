<script>
import { createEventDispatcher } from "svelte";

export let open = false;
export let onClose = () => {};

const dispatch = createEventDispatcher();

const handleClose = () => {
  open = false;
  dispatch("close");
};

</script>

<div class="modal" class:open={open}>
  <div class="modal-content">
    <slot />
  </div>
  <button on:click={handleClose}>Close</button>
</div>