DROP database ASN;
CREATE database ASN;
USE ASN;

INSERT INTO metodos (metodo, categoria_artistica) VALUES
('tradicional', 'ilustración'),
('tradicional', 'escultura'),
('tradicional', 'diseño gráfico'),
('tradicional', 'animación'),
('tradicional', 'modelado 3D'),
('digital', 'ilustración'),
('digital', 'escultura'),
('digital', 'diseño gráfico'),
('digital', 'animación'),
('digital', 'modelado 3D');


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


INSERT INTO privados (id, nombre, email, password, fecha_registro, role) VALUES
(1, 'Marta', 'marta@example.com', '$2b$10$HVIm3JRLYWlKY/R4RmkwMe8D6EM80kaBAwrFWX8t8ksD1oio8V9rq', '2024-11-19 14:07:19', 'usuario'),
(2, 'Hector', 'hector@example.com', '$2b$10$u7cCa3hbX8JucO1LVGjL5.ECZ/INKqW.C1tHt9WaaBnudcr6NnoZ6', '2024-11-19 14:07:19', 'artista'),
(3, 'Nuria', 'nuria@example.com', '$2b$10$UZnI7sGMcBS9lK0mvMU22ewQRv9rSeXvixlimsn4F7PJmX220gJ4y', '2024-11-19 14:07:19', 'usuario'),
(4, 'Pablo', 'pablo@example.com', '$2b$10$31FM33b41bUyAu8UYNGzzuoTy8GxXq2qhHjnNKk7FK5o8BfiGCZ9y', '2024-11-19 14:07:19', 'usuario'),
(5, 'Sara', 'sara@example.com', '$2b$10$MaXEgCOK6doaS8PPZZaL6epZhP4LnJDZaXoqwPCwoj7TmgTSqujWS', '2024-11-19 14:07:19', 'artista'),
(6, 'Javier', 'javier@example.com', '$2b$10$7APX.UvF8c9ov1YPuk3qYueXeIaPx9yBBNq/FcVJgiEE.6Ht7QHRO', '2024-11-19 14:07:19', 'usuario'),
(7, 'Paula', 'paula@example.com', '$2b$10$F4hUA0DFR65xe3vdG/4N0ugmPpUbXZOgp8QMDpMrZH8xEQJGr1Gfq', '2024-11-19 14:07:19', 'artista'),
(8, 'Pedro', 'pedro@example.com', '$2b$10$1KDnKOuU6Tp6sX5ikv5LEuzIbgfJEynE1LzvMw4kJeniPdwPKSI7a', '2024-11-19 14:07:19', 'usuario'),
(9, 'Laura', 'laura@example.com', '$2b$10$qsxRw/wFpCg03ksh9SzO0OR3hUqLp11dCiyT6ChxsNjNX28pSsf9W', '2024-11-19 14:07:19', 'usuario'),
(10, 'Claudia', 'claudia@example.com', '$2b$10$X6M3K5NNdWY6/D2o7XSp0u2/7Tus8gPsNSI1GbzGty3Ur0MtQdg9e', '2024-11-19 14:07:19', 'artista'),
(11, 'Pepe', 'pepe@example.com', '$2b$10$M67cM4YDJv6BsRDeJBGCvefwy1VafBMCD1DmI7Y//5YD6TGtjllTy', '2024-11-19 14:07:19', 'usuario'),
(12, 'Maria', 'maria@example.com', '$2b$10$luKB35hN.N9diB/KTAfNJuu/e58iQFNCWF89sjDgTnSsGHW7ULtIC', '2024-11-19 14:07:19', 'usuario'),
(13, 'Carlos', 'carlos@example.com', '$2b$10$J4/JDO6W.AYV5D2lD81wrOik5SfAU.IPD.A3cEZmC8rhW4RXgxxC6', '2024-11-19 14:07:19', 'usuario'),
(14, 'Ana', 'ana@example.com', '$2b$10$vsNNwJRUHOheR55VUiOwX..PIbgXi1NI1I/zm84IorUyqklJDtxbe', '2024-11-19 14:07:19', 'artista'),
(15, 'Luis', 'luis@example.com', '$2b$10$md7scFhnPvxBU1F23mcsOeJRMDb7vw9EEM4vV4HrZWS1CurrDfzqS', '2024-11-19 14:07:19', 'usuario'),
(16, 'Sofia', 'sofia@example.com', '$2b$10$x0z0FdkrOEklFwErT76qyesM8F8.4n7QI17GV5631jGTpzWq1u4R.', '2024-11-19 14:07:19', 'artista'),
(17, 'Miguel', 'miguel@example.com', '$2b$10$Qujwq.6atMKNQiOMup9tQeckrjuCpU11oHkC7qvuLsZLWkGzAGEKi', '2024-11-19 14:07:19', 'usuario'),
(18, 'Julia', 'julia@example.com', '$2b$10$ygBW.q511Ml0Fj5gDGTxz.NTlXLDHV6uVeXlBDiQ2aIaqWMdi0Way', '2024-11-19 14:07:19', 'artista'),
(19, 'Raul', 'raul@example.com', '$2b$10$6vD0wrVa57H5eiaf.EuBK.mD3ywjfcoOnBrpMJRbKFfL16UCTh1U2', '2024-11-19 14:07:19', 'usuario'),
(20, 'Daniel', 'daniel@example.com', '$2b$10$r27ZkX/T41pbzflzPMwiNuPdzCT5bSaGpZClUVStDaUDAHbeBQkzS', '2024-11-19 14:07:19', 'artista');


/* publicos (nombre_usuario = , foto = , descripcion = , rol = ) VALUES
('MartaIdeas', 'marta.jpg', 'Fanática del diseño gráfico.', 'usuario'),
('HectorDigital', 'hector.jpg', 'Artista digital emergente.', 'artista'),
('NuriaSketcher', 'nuria.jpg', 'Aficionada al dibujo.', 'usuario'),
('PabloArtFan', 'pablo.jpg', 'Fan del arte.', 'usuario'),
('SaraIllustrator', 'sara.jpg', 'Ilustradora profesional.', 'artista'),
('JavierFan', 'javier.jpg', 'Administrador y soporte.', 'usuario'),
('Paula3D', 'paula.jpg', 'Experta en modelado 3D.', 'artista'),
('PedroDraw', 'pedro.jpg', 'Dibujante de cómics.', 'usuario'),
('LauraSketch', 'laura.jpg', 'Amante de los bocetos rápidos.', 'usuario'),
('Claudia_Artista', 'Claudia.jpg', 'Artista de ilustración digital y tradicional.', 'artista'),
('Pepe_U', 'pepe.jpg', 'Explorador de ideas creativas.', 'usuario'),
('MariaDesign', 'maria.jpg', 'Amante del diseño gráfico.', 'usuario'),
('CarlosUser', 'carlos.jpg', 'Administrador de la red.', 'usuario'),
('AnaArt', 'ana.jpg', 'Escultora apasionada.', 'artista'),
('LuisUser', 'luis.jpg', 'Principiante en arte digital.', 'usuario'),
('SofiaPainter', 'sofia.jpg', 'Pintora profesional.', 'artista'),
('MiguelIdeas', 'miguel.jpg', 'Entusiasta de la creatividad.', 'usuario'),
('JuliaSculpt', 'julia.jpg', 'Escultora tradicional.', 'artista'),
('RaulDigital', 'raul.jpg', 'Curioso del modelado 3D.', 'usuario'),
('DanielArtist', 'daniel.jpg', 'Admin de la red social.', 'artista'); */

UPDATE publicos 
SET nombre_usuario = 'MartaIdeas', foto = 'marta.jpg', descripcion = 'Fanática del diseño gráfico.', rol = 'usuario'
WHERE id = 1;

UPDATE publicos 
SET nombre_usuario = 'HectorDigital', foto = 'hector.jpg', descripcion = 'Artista digital emergente.', rol = 'artista'
WHERE id = 2;

UPDATE publicos 
SET nombre_usuario = 'NuriaSketcher', foto = 'nuria.jpg', descripcion = 'Aficionada al dibujo.', rol = 'usuario'
WHERE id = 3;

UPDATE publicos 
SET nombre_usuario = 'PabloArtFan', foto = 'pablo.jpg', descripcion = 'Fan del arte.', rol = 'usuario'
WHERE id = 4;

UPDATE publicos 
SET nombre_usuario = 'SaraIllustrator', foto = 'sara.jpg', descripcion = 'Ilustradora profesional.', rol = 'artista'
WHERE id = 5;

UPDATE publicos 
SET nombre_usuario = 'JavierFan', foto = 'javier.jpg', descripcion = 'Administrador y soporte.', rol = 'usuario'
WHERE id = 6;

UPDATE publicos 
SET nombre_usuario = 'Paula3D', foto = 'paula.jpg', descripcion = 'Experta en modelado 3D.', rol = 'artista'
WHERE id = 7;

UPDATE publicos 
SET nombre_usuario = 'PedroDraw', foto = 'pedro.jpg', descripcion = 'Dibujante de cómics.', rol = 'usuario'
WHERE id = 8;

UPDATE publicos 
SET nombre_usuario = 'LauraSketch', foto = 'laura.jpg', descripcion = 'Amante de los bocetos rápidos.', rol = 'usuario'
WHERE id = 9;

UPDATE publicos 
SET nombre_usuario = 'Claudia_Artista', foto = 'Claudia.jpg', descripcion = 'Artista de ilustración digital y tradicional.', rol = 'artista'
WHERE id = 10;

UPDATE publicos 
SET nombre_usuario = 'Pepe_U', foto = 'pepe.jpg', descripcion = 'Explorador de ideas creativas.', rol = 'usuario'
WHERE id = 11;

UPDATE publicos 
SET nombre_usuario = 'MariaDesign', foto = 'maria.jpg', descripcion = 'Amante del diseño gráfico.', rol = 'usuario'
WHERE id = 12;

UPDATE publicos 
SET nombre_usuario = 'CarlosUser', foto = 'carlos.jpg', descripcion = 'Administrador de la red.', rol = 'usuario'
WHERE id = 13;

UPDATE publicos 
SET nombre_usuario = 'AnaArt', foto = 'ana.jpg', descripcion = 'Escultora apasionada.', rol = 'artista'
WHERE id = 14;

UPDATE publicos 
SET nombre_usuario = 'LuisUser', foto = 'luis.jpg', descripcion = 'Principiante en arte digital.', rol = 'usuario'
WHERE id = 15;

UPDATE publicos 
SET nombre_usuario = 'SofiaPainter', foto = 'sofia.jpg', descripcion = 'Pintora profesional.', rol = 'artista'
WHERE id = 16;

UPDATE publicos 
SET nombre_usuario = 'MiguelIdeas', foto = 'miguel.jpg', descripcion = 'Entusiasta de la creatividad.', rol = 'usuario'
WHERE id = 17;

UPDATE publicos 
SET nombre_usuario = 'JuliaSculpt', foto = 'julia.jpg', descripcion = 'Escultora tradicional.', rol = 'artista'
WHERE id = 18;

UPDATE publicos 
SET nombre_usuario = 'RaulDigital', foto = 'raul.jpg', descripcion = 'Curioso del modelado 3D.', rol = 'usuario'
WHERE id = 19;

UPDATE publicos 
SET nombre_usuario = 'DanielArtist', foto = 'daniel.jpg', descripcion = 'Admin de la red social.', rol = 'artista'
WHERE id = 20;

UPDATE publicos 
SET nombre_usuario = 'CelinaAdmin', foto = 'celina.jpg', descripcion = 'Admin de la red social.', rol = 'admin y artista de la ilustración'
WHERE id = 21;

UPDATE publicos 
SET nombre_usuario = 'OliviaAdmin', foto = 'olivia.jpg', descripcion = 'Admin de la red social.', rol = 'admin y artista del diseño'
WHERE id = 22;

UPDATE publicos 
SET nombre_usuario = 'JohanaAdmin', foto = 'johana.jpg', descripcion = 'Admin de la red social.', rol = 'admin y artista de la escultura'
WHERE id = 23;

('https://plus.unsplash.com/premium_photo-1663040494935-a4fa516b7f5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXhwbG9yYWNpJUMzJUIzbiUyMGRlJTIwdGV4dHVyYXMlMjBlbiUyMGVzY3VsdHVyYXxlbnwwfHwwfHx8MA%3D%3D', 'Exploración de texturas en escultura', 'Exploración de diversas texturas en la escultura contemporánea.', '2024-01-06', 'https://tutorial.com/texturas', 2, 1),
INSERT INTO publicaciones (imagen, titulo, contenido, fecha_publicacion, link, metodoId, publicoId) VALUES

('https://plus.unsplash.com/premium_photo-1721225465446-02f5b991a37f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWlzJTIwZGlzZSVDMyVCMW9zJTIwZ3IlQzMlQTFmaWNvcyUyMGZhdm9yaXRvc3xlbnwwfHwwfHx8MA%3D%3D', 'Mis diseños gráficos favoritos', 'Un recorrido por algunos de mis trabajos de diseño gráfico más queridos.', '2024-01-07', 'https://portfolio.com/disenos', 3, 1),
('https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHJveWVjdG8lMjBkZSUyMG1vZGVsYWRvJTIwM0R8ZW58MHx8MHx8fDA%3D', 'Proyecto personal de modelado 3D', 'Un proyecto donde exploro el modelado 3D con software profesional.', '2024-01-08', 'https://portfolio.com/modelado', 4, 1),
('https://images.unsplash.com/photo-1439436556258-1f7fab1bfd4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QW5pbWFjaSVDMyVCM24lMjBiJUMzJUExc2ljYSUyMHBhcmElMjBwcmluY2lwaWFudGVzfGVufDB8fDB8fHww', 'Animación básica para principiantes', 'Tutorial sobre cómo realizar animaciones sencillas para iniciarse en la animación digital.', '2024-01-09', 'https://tutorial.com/animacion', 5, 1),
('https://images.unsplash.com/photo-1599009432031-ba5d3a794aec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SWx1c3RyYWNpb25lcyUyMGRpZ2l0YWxlc3xlbnwwfHwwfHx8MA%3D%3D', 'Ilustraciones digitales y tradicionales', 'Exploración de mi trabajo en ilustración tanto digital como tradicional.', '2024-01-10', 'https://portfolio.com/ilustracion', 6, 1),
('https://plus.unsplash.com/premium_photo-1669749216793-040be16ade1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGludHVyYSUyMGFsJTIwJUMzJUIzbGVvfGVufDB8fDB8fHww', 'Cómo trabajar con óleo en diseño conceptual', 'Técnicas y consejos sobre el uso del óleo en el arte conceptual.', '2024-01-11', 'https://tutorial.com/oleo', 2, 1),
('https://images.unsplash.com/photo-1506418266807-5cf4a278ae8d', 'Grabados para artistas avanzados', 'Un enfoque detallado sobre el grabado como técnica avanzada para artistas.', '2024-01-12', 'https://portfolio.com/grabados', 3, 1),
('https://images.unsplash.com/photo-1506489376355-8575db7a6a29', 'Edición de video en programas digitales', 'Guía para principiantes sobre cómo editar videos usando software digital.', '2024-01-13', 'https://tutorial.com/edicion', 4, 1),
('https://images.unsplash.com/photo-1529476007987-d0142c22604d', 'Arte conceptual paso a paso', 'Un vistazo al proceso de creación de arte conceptual desde el inicio hasta el final.', '2024-01-14', 'https://portfolio.com/conceptual', 5, 1),
('https://images.unsplash.com/photo-1577729930200-4b70bc9d3be9', 'Caligrafía artística en papel', 'Descubre cómo dominar el arte de la caligrafía artística sobre papel.', '2024-01-15', 'https://tutorial.com/caligrafia', 1, 1),
('https://images.unsplash.com/photo-1575210998705-dc5a84db18b5', 'Mis proyectos de arte abstracto', 'Exploración de mis obras de arte abstracto, utilizando diferentes técnicas y medios.', '2024-01-16', 'https://portfolio.com/abstracto', 2, 1),
('https://images.unsplash.com/photo-1580822190055-9b2b4c8cd7a3', 'Cómo crear bocetos rápidos', 'Una guía práctica para aprender a hacer bocetos rápidos y efectivos.', '2024-01-17', 'https://tutorial.com/bocetos', 3, 1),
('https://images.unsplash.com/photo-1565207345-d62b8317e2ff', 'Dibujo técnico en tableta digital', 'Aprende a realizar dibujos técnicos usando una tableta digital.', '2024-01-18', 'https://tutorial.com/digital', 4, 1),
('https://images.unsplash.com/photo-1562009580-bbb560022759', 'Galería de arte digital', 'Una muestra de mi trabajo más reciente en el ámbito del arte digital.', '2024-01-19', 'https://portfolio.com/galeria', 5, 1),
('https://images.unsplash.com/photo-1572077550153-99ff33d8a3e6', 'Tutorial de escultura para principiantes', 'Un tutorial básico para aquellos que inician su camino en el arte de la escultura.', '2024-01-20', 'https://tutorial.com/escultura', 2, 1),
('https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SWx1c3RyYWNpJUMzJUIzbiUyMGRpZ2l0YWwlMjBhdmFuemFkYXxlbnwwfHwwfHx8MA%3D%3D', 'Ilustración digital avanzada', 'Aprende técnicas avanzadas para crear ilustraciones digitales con efectos impresionantes.', '2024-01-21', 'https://portfolio.com/ilustracion-avanzada', 6, 1),
('https://images.unsplash.com/photo-1525205745866-19f243d1b3b0', 'Escultura digital en 3D', 'Un tutorial sobre cómo realizar esculturas en 3D usando software digital.', '2024-01-22', 'https://tutorial.com/escultura-digital', 7, 1),
('https://images.unsplash.com/photo-1527175472034-b145256da99a', 'Diseño gráfico digital', 'Cómo el diseño gráfico ha evolucionado con las herramientas digitales.', '2024-01-23', 'https://portfolio.com/diseno-digital', 8, 1),
('https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SWx1c3RyYWNpJUMzJUIzbiUyMGRpZ2l0YWwlMjBjcmVhdGl2YXxlbnwwfHwwfHx8MA%3D%3D', 'Ilustración digital creativa', 'Exploración de nuevas técnicas para la ilustración digital creativa.', '2024-01-24', 'https://portfolio.com/ilustracion-creativa', 6, 1),
('https://images.unsplash.com/photo-1628130235364-9e412ffaae5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWx1c3RyYWNpJUMzJUIzbiUyMGRpZ2l0YWwlMjB5JTIwY3JlYXRpdmlkYWR8ZW58MHx8MHx8fDA%3D', 'Diseño digital y creatividad', 'Una mirada a cómo las herramientas digitales pueden impulsar la creatividad en el diseño.', '2024-01-25', 'https://portfolio.com/diseno-creativo', 6, 1);


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



