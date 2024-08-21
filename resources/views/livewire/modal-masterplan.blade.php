<div>
    @if ($open)
        <div
            class="flex bg-black bg-opacity-30 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full md:max-w-2xl lg:max-w-4xl max-h-full">
                <form wire:submit="$dispatch('save-modal')">

                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div
                            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <span>
                                <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Actualización de información
                                </h4>
                                <small class="text-gray-600 italic">Lote #{{ $data['lote'] }}</small>
                            </span>
                            <button wire:click="$dispatch('close-modal')" type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-4 md:p-5 space-y-4">
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                                <div class="w-full mb-2">
                                    <label for="vista"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vista</label>
                                    <input type="text" id="vista" wire:model.live.debounce.250ms="vista"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="ESQUINA" required />
                                </div>
                                <div class="w-full mb-2">
                                    <label for="frente"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Frente</label>
                                    <input type="text" id="frente" wire:model.live.debounce.250ms="frente"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="fondo"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fondo</label>
                                    <input type="text" id="fondo" wire:model.live.debounce.250ms="fondo"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="m2"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">M2
                                        totales</label>
                                    <input type="text" id="m2" wire:model.live.debounce.250ms="m2"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="precioTotal"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio
                                        Total</label>
                                    <input type="text" id="precioTotal" wire:model.live.debounce.250ms="precioTotal"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="enganche"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enganche</label>
                                    <input type="text" id="enganche" wire:model.live.debounce.250ms="enganche"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="manzana"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manzana</label>
                                    <input type="text" id="manzana" wire:model.live.debounce.250ms="manzana"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="precio_m2"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio
                                        m2</label>
                                    <input type="text" id="precio_m2" wire:model.live.debounce.250ms="precio_m2"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="precio48"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio 48
                                        meses</label>
                                    <input type="text" id="precio48" wire:model.live.debounce.250ms="precio48"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="precio36"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio 36
                                        meses</label>
                                    <input type="text" id="precio36" wire:model.live.debounce.250ms="precio36"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="precio24"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio 24
                                        meses</label>
                                    <input type="text" id="precio24" wire:model.live.debounce.250ms="precio24"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="precio12"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio 12
                                        meses</label>
                                    <input type="text" id="precio12" wire:model.live.debounce.250ms="precio12"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="precio6"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio 6
                                        meses</label>
                                    <input type="text" id="precio6" wire:model.live.debounce.250ms="precio6"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="contado"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contado</label>
                                    <input type="text" id="contado" wire:model.live.debounce.250ms="contado"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                                <div class="w-full mb-2">
                                    <label for="apartado"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apartado</label>
                                    <input type="text" id="apartado" wire:model.live.debounce.250ms="apartado"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>

                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div
                            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button type="submit"
                                class="px-3 py-2 text-xs font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Actualizar</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    @endif
</div>
