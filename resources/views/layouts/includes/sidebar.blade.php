<aside id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 text-sm">
        <h3 class="flex items-center justify-start font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="30" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
            </svg>
            Modulos
        </h3>
        <ul class="pt-1 mt-1 space-y-2 mb-5 font-medium border-t border-gray-200 dark:border-gray-700">
            @can(PermissionKey::Masterplan['permissions']['index']['name'])
                <li>
                    <a href="{{ route('panel.masterplan.index') }}"
                        class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group {{ request()->is('admin/lotificacion*') ? 'bg-gray-100' : '' }}">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>

                        <span class="ml-4">Masterplan</span>
                    </a>
                </li>
            @endcan
        </ul>
        {{-- * usuarios y permisos --}}
        @canany([PermissionKey::Admin['permissions']['index']['name'],
            PermissionKey::Role['permissions']['index']['name']])
            <h3 class="flex items-center justify-start font-bold">
                <svg class="icon icon-tabler icon-tabler-adjustments mr-2" width="30" height="20" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M6 4v4"></path>
                    <path d="M6 12v8"></path>
                    <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M12 4v10"></path>
                    <path d="M12 18v2"></path>
                    <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M18 4v1"></path>
                    <path d="M18 9v11"></path>
                </svg> Configuraciones
            </h3>
            <ul class="pt-1 mt-1 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                @can(PermissionKey::Admin['permissions']['index']['name'])
                    <li>
                        <a href="{{ route('panel.usuarios.index') }}"
                            class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group {{ request()->is('admin/usuarios*') ? 'bg-gray-100' : '' }}">
                            <svg aria-hidden="true"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span class="ml-4">Administrar usuarios</span>
                        </a>
                    </li>
                @endcan
                @can(PermissionKey::Role['permissions']['index']['name'])
                    <li>
                        <a href="{{ route('panel.roles.index') }}"
                            class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group {{ request()->is('admin/roles*') ? 'bg-gray-100' : '' }}">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3">
                                </path>
                                <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                <path d="M12 12l0 2.5"></path>
                            </svg>
                            <span class="ml-4">Roles y permisos</span>
                        </a>
                    </li>
                @endcan
            </ul>
        @endcanany
    </div>
</aside>
