CREATE database ASN;
USE ASN;

INSERT INTO metodos (metodo, categoria_artistica) VALUES
('tradicional', 'ilustración'),
('tradicional', 'escultura'),
('digital', 'ilustración'),
('digital', 'diseño gráfico'),
('digital', 'modelado 3D'),
('digital', 'animación'),
('digital', 'escultura'),
('tradicional', 'diseño gráfico'),
('tradicional', 'animación'),
('digital', 'modelado 3D'),
('digital', 'ilustración'),
('tradicional', 'escultura'),
('digital', 'diseño gráfico'),
('digital', 'modelado 3D'),
('digital', 'animación'),
('digital', 'ilustración'),
('tradicional', 'escultura'),
('digital', 'diseño gráfico'),
('digital', 'modelado 3D'),
('digital', 'animación');


INSERT INTO materiales (nombre, descripcion, marca, imagen, tutorial, metodoId) VALUES
('Lápices de Grafito', 'Lápices de diferentes grados para dibujo técnico.', 'Staedtler', 'lapices.jpg', 'https://tutorial.com/lapices', 1),
('Acuarelas', 'Pinturas en base de agua para trabajos artísticos.', 'Winsor & Newton', 'acuarelas.jpg', 'https://tutorial.com/acuarelas', 2),
('Lienzos', 'Lienzos de algodón para pintura al óleo o acrílico.', 'Arteza', 'lienzos.jpg', 'https://tutorial.com/lienzos', 2),
('Carboncillo', 'Material para bocetos rápidos y sombras.', 'General\'s', 'carboncillo.jpg', 'https://tutorial.com/carboncillo', 2),
('Óleos', 'Pinturas al óleo de alta calidad.', 'Van Gogh', 'oleos.jpg', 'https://tutorial.com/oleos', 1),
('Rotuladores', 'Rotuladores de tinta para ilustración.', 'Copic', 'rotuladores.jpg', 'https://tutorial.com/rotuladores', 3),
('Acrílicos', 'Pinturas acrílicas para arte moderno.', 'Liquitex', 'acrilicos.jpg', 'https://tutorial.com/acrilicos', 1),
('Pasteles', 'Colores en barra para efectos suaves.', 'Rembrandt', 'pasteles.jpg', 'https://tutorial.com/pasteles', 8),
('Bloc de Dibujo', 'Bloc de papel para técnicas mixtas.', 'Strathmore', 'bloc.jpg', 'https://tutorial.com/bloc', 9),
('Pinceles', 'Pinceles para óleo y acrílico.', 'Da Vinci', 'pinceles.jpg', 'https://tutorial.com/pinceles', 1),
('Témperas', 'Pinturas a base de agua para principiantes.', 'Pelikan', 'temperas.jpg', 'https://tutorial.com/temperas', 2),
('Espátulas', 'Herramientas para mezcla y texturas.', 'RGM', 'espatulas.jpg', 'https://tutorial.com/espatulas', 8),
('Papeles de Acuarela', 'Papel texturizado para acuarelas.', 'Fabriano', 'papel-acuarela.jpg', 'https://tutorial.com/papel-acuarela', 8),
('Plumillas', 'Plumillas para caligrafía artística.', 'Brause', 'plumillas.jpg', 'https://tutorial.com/plumillas', 1),
('Tinta China', 'Tinta para ilustración y caligrafía.', 'Higgins', 'tinta.jpg', 'https://tutorial.com/tinta', 9),
('Lápices de Colores', 'Lápices pigmentados para arte.', 'Prismacolor', 'lapices-colores.jpg', 'https://tutorial.com/lapices-colores',9),
('Esmaltes', 'Colores cerámicos para trabajos en vidrio.', 'Amaco', 'esmaltes.jpg', 'https://tutorial.com/esmaltes', 8),
('Ceras', 'Pasteles cerosos para ilustraciones brillantes.', 'Crayola', 'ceras.jpg', 'https://tutorial.com/ceras', 1),
('Goma de Borrar', 'Goma especial para detalles en dibujos.', 'Faber-Castell', 'goma.jpg', 'https://tutorial.com/goma',1),
('Tableros de Dibujo', 'Tableros para dibujo técnico.', 'Rotring', 'tablero.jpg', 'https://tutorial.com/tableros', 2);


INSERT INTO programas (nombre, descripcion, marca, tutorial) VALUES
('Adobe Photoshop', 'Software líder en edición y diseño gráfico.', 'Adobe', 'https://tutorial.com/photoshop'),
('Adobe Illustrator', 'Herramienta vectorial para diseño gráfico.', 'Adobe', 'https://tutorial.com/illustrator'),
('CorelDRAW', 'Software de diseño gráfico y edición vectorial.', 'Corel', 'https://tutorial.com/coreldraw'),
('Affinity Designer', 'Herramienta alternativa para diseño gráfico.', 'Serif', 'https://tutorial.com/affinity'),
('Canva', 'Plataforma de diseño gráfico online.', 'Canva', 'https://tutorial.com/canva'),
('Inkscape', 'Editor vectorial gratuito y de código abierto.', 'Inkscape', 'https://tutorial.com/inkscape'),
('Procreate', 'Aplicación de ilustración para iPad.', 'Savage', 'https://tutorial.com/procreate'),
('Krita', 'Software gratuito de ilustración digital.', 'Krita Foundation', 'https://tutorial.com/krita'),
('Blender', 'Software gratuito para modelado 3D y animación.', 'Blender Foundation', 'https://tutorial.com/blender'),
('ZBrush', 'Software especializado en modelado 3D y esculpido.', 'Pixologic', 'https://tutorial.com/zbrush'),
('Autodesk Maya', 'Herramienta profesional de modelado y animación 3D.', 'Autodesk', 'https://tutorial.com/maya'),
('Cinema 4D', 'Software avanzado para modelado y animación 3D.', 'Maxon', 'https://tutorial.com/cinema4d'),
('3ds Max', 'Software profesional para modelado y renderizado 3D.', 'Autodesk', 'https://tutorial.com/3dsmax'),
('After Effects', 'Herramienta para efectos visuales y animación.', 'Adobe', 'https://tutorial.com/aftereffects'),
('Toon Boom Harmony', 'Software profesional para animación 2D.', 'Toon Boom', 'https://tutorial.com/toonboom'),
('OpenToonz', 'Software gratuito para animación 2D.', 'OpenToonz', 'https://tutorial.com/opentoonz'),
('Clip Studio Paint', 'Software para ilustración y cómics.', 'CELSYS', 'https://tutorial.com/clipstudio'),
('SketchUp', 'Herramienta para modelado arquitectónico y 3D.', 'Trimble', 'https://tutorial.com/sketchup'),
('Figma', 'Plataforma colaborativa para diseño UI/UX.', 'Figma', 'https://tutorial.com/figma'),
('Adobe XD', 'Herramienta para diseño de interfaces y prototipos.', 'Adobe', 'https://tutorial.com/adobexd');

INSERT INTO herramientas (nombre, descripcion, marca) VALUES
('Wacom Tablet', 'Tableta gráfica ideal para diseño digital.', 'Wacom'),
('Huion Kamvas', 'Pantalla gráfica para ilustración profesional.', 'Huion'),
('XP-Pen Deco', 'Tableta compacta para principiantes.', 'XP-Pen'),
('iPad Pro', 'Dispositivo portátil para ilustración digital.', 'Apple'),
('Samsung Galaxy Tab', 'Tableta con compatibilidad para diseño gráfico.', 'Samsung'),
('Lenovo ThinkPad', 'Portátil de alto rendimiento para diseño.', 'Lenovo'),
('Surface Pro', 'Tableta portátil para diseño y dibujo.', 'Microsoft'),
('Cintiq 16', 'Pantalla gráfica avanzada para profesionales.', 'Wacom'),
('Bamboo Pen', 'Lápiz óptico básico para diseño gráfico.', 'Wacom'),
('Huion H640P', 'Tableta gráfica pequeña pero potente.', 'Huion'),
('Cintiq Pro', 'Pantalla gráfica para artistas avanzados.', 'Wacom'),
('Dell XPS 15', 'Portátil con gráficos de alto rendimiento.', 'Dell'),
('Asus ZenBook', 'Laptop para diseño gráfico y modelado.', 'Asus'),
('MacBook Pro', 'Laptop potente para proyectos creativos.', 'Apple'),
('iMac', 'Computadora de escritorio ideal para artistas.', 'Apple'),
('Canon Scanner', 'Escáner profesional para digitalización.', 'Canon'),
('Epson Perfection', 'Escáner para alta resolución.', 'Epson'),
('Brother Laser Printer', 'Impresora láser de alta calidad.', 'Brother'),
('Logitech Pen', 'Lápiz óptico ergonómico.', 'Logitech'),
('Gaomon PD1560', 'Pantalla gráfica para diseño digital.', 'Gaomon');

INSERT INTO privados (nombre, email, password, fecha_registro, role) VALUES
('Claudia', 'Claudia@example.com', 'password123', '2024-01-01', 'admin');

INSERT INTO usuarios (id, nombre, email, password, fecha_registro, role) VALUES
(1, 'Marta', 'marta@example.com', '$2b$10$HVIm3JRLYWlKY/R4RmkwMe8D6EM80kaBAwrFWX8t8ksD1oio8V9rq', '2024-11-19 14:07:19', 'usuario'),
(2, 'Hector', 'hector@example.com', '$2b$10$u7cCa3hbX8JucO1LVGjL5.ECZ/INKqW.C1tHt9WaaBnudcr6NnoZ6', '2024-11-19 14:07:19', 'artista'),
(3, 'Nuria', 'nuria@example.com', '$2b$10$UZnI7sGMcBS9lK0mvMU22ewQRv9rSeXvixlimsn4F7PJmX220gJ4y', '2024-11-19 14:07:19', 'usuario'),
(4, 'Pablo', 'pablo@example.com', '$2b$10$31FM33b41bUyAu8UYNGzzuoTy8GxXq2qhHjnNKk7FK5o8BfiGCZ9y', '2024-11-19 14:07:19', 'usuario'),
(5, 'Sara', 'sara@example.com', '$2b$10$MaXEgCOK6doaS8PPZZaL6epZhP4LnJDZaXoqwPCwoj7TmgTSqujWS', '2024-11-19 14:07:19', 'artista'),
(6, 'Javier', 'javier@example.com', '$2b$10$7APX.UvF8c9ov1YPuk3qYueXeIaPx9yBBNq/FcVJgiEE.6Ht7QHRO', '2024-11-19 14:07:19', 'admin'),
(7, 'Paula', 'paula@example.com', '$2b$10$F4hUA0DFR65xe3vdG/4N0ugmPpUbXZOgp8QMDpMrZH8xEQJGr1Gfq', '2024-11-19 14:07:19', 'artista'),
(8, 'Pedro', 'pedro@example.com', '$2b$10$1KDnKOuU6Tp6sX5ikv5LEuzIbgfJEynE1LzvMw4kJeniPdwPKSI7a', '2024-11-19 14:07:19', 'usuario'),
(9, 'Laura', 'laura@example.com', '$2b$10$qsxRw/wFpCg03ksh9SzO0OR3hUqLp11dCiyT6ChxsNjNX28pSsf9W', '2024-11-19 14:07:19', 'usuario'),
(10, 'Claudia', 'claudia@example.com', '$2b$10$X6M3K5NNdWY6/D2o7XSp0u2/7Tus8gPsNSI1GbzGty3Ur0MtQdg9e', '2024-11-19 14:07:19', 'artista'),
(11, 'Pepe', 'pepe@example.com', '$2b$10$M67cM4YDJv6BsRDeJBGCvefwy1VafBMCD1DmI7Y//5YD6TGtjllTy', '2024-11-19 14:07:19', 'usuario'),
(12, 'Maria', 'maria@example.com', '$2b$10$luKB35hN.N9diB/KTAfNJuu/e58iQFNCWF89sjDgTnSsGHW7ULtIC', '2024-11-19 14:07:19', 'usuario'),
(13, 'Carlos', 'carlos@example.com', '$2b$10$J4/JDO6W.AYV5D2lD81wrOik5SfAU.IPD.A3cEZmC8rhW4RXgxxC6', '2024-11-19 14:07:19', 'admin'),
(14, 'Ana', 'ana@example.com', '$2b$10$vsNNwJRUHOheR55VUiOwX..PIbgXi1NI1I/zm84IorUyqklJDtxbe', '2024-11-19 14:07:19', 'artista'),
(15, 'Luis', 'luis@example.com', '$2b$10$md7scFhnPvxBU1F23mcsOeJRMDb7vw9EEM4vV4HrZWS1CurrDfzqS', '2024-11-19 14:07:19', 'usuario'),
(16, 'Sofia', 'sofia@example.com', '$2b$10$x0z0FdkrOEklFwErT76qyesM8F8.4n7QI17GV5631jGTpzWq1u4R.', '2024-11-19 14:07:19', 'artista'),
(17, 'Miguel', 'miguel@example.com', '$2b$10$Qujwq.6atMKNQiOMup9tQeckrjuCpU11oHkC7qvuLsZLWkGzAGEKi', '2024-11-19 14:07:19', 'usuario'),
(18, 'Julia', 'julia@example.com', '$2b$10$ygBW.q511Ml0Fj5gDGTxz.NTlXLDHV6uVeXlBDiQ2aIaqWMdi0Way', '2024-11-19 14:07:19', 'artista'),
(19, 'Raul', 'raul@example.com', '$2b$10$6vD0wrVa57H5eiaf.EuBK.mD3ywjfcoOnBrpMJRbKFfL16UCTh1U2', '2024-11-19 14:07:19', 'usuario'),
(20, 'Daniel', 'daniel@example.com', '$2b$10$r27ZkX/T41pbzflzPMwiNuPdzCT5bSaGpZClUVStDaUDAHbeBQkzS', '2024-11-19 14:07:19', 'admin');


INSERT INTO publicos (id, nombre_usuario, foto, descripcion, rol, privadoId) VALUES
(1, 'MartaIdeas', 'marta.jpg', 'Fanática del diseño gráfico.', 'usuario', 1),
(2, 'HectorDigital', 'hector.jpg', 'Artista digital emergente.', 'artista', 2),
(3, 'NuriaSketcher', 'nuria.jpg', 'Aficionada al dibujo.', 'usuario', 3),
(4, 'PabloArtFan', 'pablo.jpg', 'Fan del arte.', 'usuario', 4),
(5, 'SaraIllustrator', 'sara.jpg', 'Ilustradora profesional.', 'artista', 5),
(6, 'JavierAdmin', 'javier.jpg', 'Administrador y soporte.', 'admin', 6),
(7, 'Paula3D', 'paula.jpg', 'Experta en modelado 3D.', 'artista', 7),
(8, 'PedroDraw', 'pedro.jpg', 'Dibujante de cómics.', 'usuario', 8),
(9, 'LauraSketch', 'laura.jpg', 'Amante de los bocetos rápidos.', 'usuario', 9),
(10, 'Claudia_Artista', 'Claudia.jpg', 'Artista de ilustración digital y tradicional.', 'artista', 10),
(11, 'Pepe_U', 'pepe.jpg', 'Explorador de ideas creativas.', 'usuario', 11),
(12, 'MariaDesign', 'maria.jpg', 'Amante del diseño gráfico.', 'usuario', 12),
(13, 'CarlosAdmin', 'carlos.jpg', 'Administrador de la red.', 'admin', 13),
(14, 'AnaArt', 'ana.jpg', 'Escultora apasionada.', 'artista', 14),
(15, 'LuisUser', 'luis.jpg', 'Principiante en arte digital.', 'usuario', 15),
(16, 'SofiaPainter', 'sofia.jpg', 'Pintora profesional.', 'artista', 16),
(17, 'MiguelIdeas', 'miguel.jpg', 'Entusiasta de la creatividad.', 'usuario', 17),
(18, 'JuliaSculpt', 'julia.jpg', 'Escultora tradicional.', 'artista', 18),
(19, 'RaulDigital', 'raul.jpg', 'Curioso del modelado 3D.', 'usuario', 19),
(20, 'DanielAdmin', 'daniel.jpg', 'Admin de la red social.', 'admin', 20);




INSERT INTO publicaciones (contenido, fecha_publicacion, categoria, link, metodoId, publicoId) VALUES
('Exploración de texturas en escultura.', '2024-01-06', 'tutorial', 'https://tutorial.com/texturas', 2, 6),
('Mis diseños gráficos favoritos.', '2024-01-07', 'portfolio', 'https://portfolio.com/disenos', 3, 7),
('Proyecto personal de modelado 3D.', '2024-01-08', 'portfolio', 'https://portfolio.com/modelado', 4, 8),
('Animación básica para principiantes.', '2024-01-09', 'tutorial', 'https://tutorial.com/animacion', 5, 9),
('Ilustraciones digitales y tradicionales.', '2024-01-10', 'portfolio', 'https://portfolio.com/ilustracion', 1, 10),
('Cómo trabajar con óleo en diseño conceptual.', '2024-01-11', 'tutorial', 'https://tutorial.com/oleo', 2, 11),
('Grabados para artistas avanzados.', '2024-01-12', 'portfolio', 'https://portfolio.com/grabados', 3, 12),
('Edición de video en programas digitales.', '2024-01-13', 'tutorial', 'https://tutorial.com/edicion', 4, 13),
('Arte conceptual paso a paso.', '2024-01-14', 'portfolio', 'https://portfolio.com/conceptual', 5, 14),
('Caligrafía artística en papel.', '2024-01-15', 'tutorial', 'https://tutorial.com/caligrafia', 1, 15),
('Mis proyectos de arte abstracto.', '2024-01-16', 'portfolio', 'https://portfolio.com/abstracto', 2, 16),
('Cómo crear bocetos rápidos.', '2024-01-17', 'tutorial', 'https://tutorial.com/bocetos', 3, 17),
('Dibujo técnico en tableta digital.', '2024-01-18', 'tutorial', 'https://tutorial.com/digital', 4, 18),
('Galería de arte digital.', '2024-01-19', 'portfolio', 'https://portfolio.com/galeria', 5, 19),
('Tutorial de escultura para principiantes.', '2024-01-20', 'tutorial', 'https://tutorial.com/escultura', 2, 20);



INSERT INTO pro_herrs (programa_id, herramienta_id, metodo_id) VALUES
(1, 1, 2),
(2, 2, 1),
(3, 3, 1),
(4, 4,2),
(5, 5,1),
(6, 6,1),
(7, 7, 2),
(8, 8, 1),
(9, 9,2),
(10, 10, 1),
(1, 11,1),
(2, 12,1),
(3, 13,1),
(4, 14,2),
(5, 15,1),
(6, 16,2),
(7, 17,1),
(8, 18,1),
(9, 19,1),
(10, 20,1);



