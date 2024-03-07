<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <title>{{ config('app.name', 'Ya\'axche') }}</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description"
        content="Lotes de inversi&oacute;n con amenidades premium en dzidzant&uacute;n, yucat&aacute;n." />
    <meta name="author" content="{{ config('app.name', 'Ya\'axche') }}" />
    <meta property="og:type" content="es_MX" />
    <meta property="og:locale" content="website" />
    <meta property="og:site_name" content="{{ config('app.name', 'Ya\'axche') }}" />
    <meta property="og:title" content="{{ config('app.name', 'Ya\'axche') }}" />
    <meta property="og:url" content="https://adanaresidencial.com/" />
    <meta property="og:description"
        content="Lotes de inversi&oacute;n con amenidades premium en dzidzant&uacute;n, yucat&aacute;n." />
    {{-- <meta property="og:image" content="img/fb.jpg" />

    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
    <link rel="manifest" href="favicon/site.webmanifest" />
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#edece5" />
    <meta name="theme-color" content="#edece5" /> --}}



    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/react/main.jsx'])
</head>

<body class="antialiased bg-white">
    <div id="root" class=""></div>

    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1572582986899747');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display: none"
            src="https://www.facebook.com/tr?id=1572582986899747&ev=PageView&noscript=1" /></noscript>
</body>

</html>
