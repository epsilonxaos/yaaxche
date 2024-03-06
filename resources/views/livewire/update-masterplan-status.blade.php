<div class="flex">
    <button title="Cambiar a disponible" wire:click="changestatus(1, {{ $id }})" type="button"
        class="w-[22px] h-[22px] rounded bg-green-600 flex items-center justify-center mr-1">
        @if ($status == 1)
            <svg width="15" height="15" viewBox="0 0 256 256">
                <path fill="#ffffff" d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104" />
            </svg>
        @else
            <svg width="15" height="15" viewBox="0 0 256 256">
                <path fill="#ffffff"
                    d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84" />
            </svg>
        @endif
    </button>
    <button title="Cambiar a apartado" wire:click="changestatus(2, {{ $id }})" type="button"
        class="w-[22px] h-[22px] rounded bg-yellow-600 flex items-center justify-center mr-1">
        @if ($status == 2)
            <svg width="15" height="15" viewBox="0 0 256 256">
                <path fill="#ffffff" d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104" />
            </svg>
        @else
            <svg width="15" height="15" viewBox="0 0 256 256">
                <path fill="#ffffff"
                    d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84" />
            </svg>
        @endif
    </button>
    <button title="Cambiar a vendido" wire:click="changestatus(3, {{ $id }})" type="button"
        class="w-[22px] h-[22px] rounded bg-red-600 flex items-center justify-center mr-1">
        @if ($status == 3)
            <svg width="15" height="15" viewBox="0 0 256 256">
                <path fill="#ffffff" d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104" />
            </svg>
        @else
            <svg width="15" height="15" viewBox="0 0 256 256">
                <path fill="#ffffff"
                    d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84" />
            </svg>
        @endif
    </button>
</div>
