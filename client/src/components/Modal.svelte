<script>
    import { onMount } from 'svelte'

    export let isOpen = false
    export let title
  
    onMount(() => {
        window.addEventListener('keydown', handleCloseEsc)
    })

    function handleCloseEsc(event) {
        if (event.key === 'Escape' && isOpen) {
            handleClose()
        }
    }

    function handleClose() {
      isOpen = false
      location.reload()
    }
</script>
  
{#if isOpen}
<div class="modal show bg-dark d-flex align-items-center" tabindex="-1" style="display: block;" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header text-danger">
                <h4 class="modal-title fw-bold">{title}</h4>
                <button type="button" class="btn btn-danger fw-bold" on:click={handleClose}>X</button>
            </div>
            <div class="modal-body">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</div>
{/if}
