const Publicacion = require("../models/publicaciones");
const Publico = require("../models/perfil_publico");
const Privado = require("../models/perfil_privado");
const Metodo = require("../models/metodos");
const Material = require("../models/materiales_tradicionales");
const Herramienta = require("../models/herramientas_digitales");
const Programa = require("../models/programas");
const Pro_Herr = require("../models/programas_herramientas");

//ADMINS
async function getAllPublicaciones(req, res) {
  try {
    const publicaciones = await Publicacion.findAll({
      where: req.query,
      include: [
        {
          model: Metodo,
          attributes: ["metodo", "categoria_artistica"],
        },
        {
          model: Material,
          attributes: ["nombre", "descripcion", "marca"], // Asegúrate de los campos que necesitas
          as: "materiales", // Usa el alias definido en la relación
        },
/*         {
          model: Herramienta,
          through: { attributes: [] },
          as: "herramientas",
          attributes: ["nombre", "descripcion", "marca"],
        },
        {
          model: Programa,
          through: { attributes: [] },
          as: "programas",
          attributes: ["nombre", "descripcion", "marca"],
        }, */
        {
          model: Publico,
          attributes: ["privadoId"],
          include: {
            model: Privado,
            attributes: ["nombre"],
          },
        },
      ],
    });
    if (publicaciones) {
      return res.status(200).json(publicaciones);
    } else {
      return res.status(404).send("Publicaciones no encontradas");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}


async function getOnePublicacion(req, res) {
  try {
    const publicacion = await Publicacion.findByPk(req.params.id);
    if (publicacion) {
      return res.status(200).json(publicacion);
    } else {
      return res.status(404).send("Publicación no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createPublicacion(req, res) {
  try {
    const publicacion = await Publicacion.create(req.body);
    return res
      .status(200)
      .json({ message: "Publicación creada", publicación: publicacion });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updatePublicacion(req, res) {
  try {
    const [publicacionExist, publicacion] = await Publicacion.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (publicacionExist !== 0) {
      return res
        .status(200)
        .json({ message: "Publicación actualizada", publicación: publicacion });
    } else {
      return res.status(404).send("Publicación no encontrada");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deletePublicacion(req, res) {
  try {
    const publicacion = await Publicacion.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (publicacion) {
      return res.status(200).json("Publicación borrada");
    } else {
      return res.status(404).send("Publicación no encontrada");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

// USUARIOS Y ARTISTAS

async function createUserPublicacion(req, res) {
  try {
    // Validar que el usuario está autenticado
    if (!res.locals.privado) {
      return res.status(401).send("Usuario no autenticado");
    }

    const {
      metodo,
      categoria_artistica,
      materiales,
      herramientas,
      programas,
      ...publicacionData
    } = req.body;
    console.log(req.body)
    // Verifica si el método existe mediante 'metodo' y 'categoria_artistica'
    const metodoEncontrado = await Metodo.findOne({
      where: { metodo: metodo, categoria_artistica: categoria_artistica },
    });

    if (!metodoEncontrado) {
      return res.status(404).json({ message: "Método no encontrado" });
    }

    // Crear la publicación con el metodoId y publicoId
    const publicacion = await Publicacion.create({
      ...publicacionData, // Incluye los datos de la publicación
      metodoId: metodoEncontrado.id, // Usamos el método encontrado
      publicoId: res.locals.privado.id, // Asociamos al usuario autenticado
    });
    // Restricciones por tipo de método
    if (metodo === "tradicional") {
      // Si el método es "tradicional", se requieren materiales
      if (!materiales || materiales.length === 0) {
        return res
          .status(400)
          .json({ message: "Debes proporcionar materiales para este método" });
      }

      // Manejar materiales
      /*for (const material of materiales) {
        const [mat] = await Material.findOrCreate({
          where: { nombre: material.nombre },
          defaults: { ...material, metodoId: metodoEncontrado.id },
        }); RECORDAD QUE ESTO PERMITE NO DUPLICAR MATERIALES ASÍ QUE MÁS ADELANTE SE PUEDE IMPLEMENTAR MEJOR*/
        for (const material of materiales) {
          await Material.create({
            ...material,
            metodoId: metodoEncontrado.id,
            publicacionId: publicacion.id, // Asociar el material a la publicación
          });
        }
      }

       /* if (mat.metodoId !== metodoEncontrado.id) {
          await mat.update({ metodoId: metodoEncontrado.id });
        }
      }*/
// Manejar herramientas y programas si el método es "digital" (similar lógica a lo existente)


 // Caso método digital: manejar herramientas y programas
 if (metodo === "digital") {
  if (!herramientas || !programas) {
    return res.status(400).json({
      message: "Debes proporcionar herramientas y programas para este método",
    });
  }
  

  for (const programa of programas) {
    const [prog] = await Programa.findOrCreate({
      where: { nombre: programa.nombre },
      defaults: programa, // Incluye descripción, marca, etc.
    });

    if (programa.herramientas && programa.herramientas.length > 0) {
      for (const herramienta of programa.herramientas) {
        const [herr] = await Herramienta.findOrCreate({
          where: { nombre: herramienta.nombre },
          defaults: herramienta, // Incluye descripción y marca
        });

        // Relación programa-herramienta-publicación
        await Pro_Herr.findOrCreate({
          where: {
            programaId: prog.id,
            herramientaId: herr.id,
            metodoId: metodoEncontrado.id,
            publicacionId: publicacion.id,
          },
          defaults: {
            programaId: prog.id,
            herramientaId: herr.id,
            metodoId: metodoEncontrado.id,
            publicacionId: publicacion.id,
          },
        });
      }
    }
  }

  for (const herramienta of herramientas) {
    const [herr] = await Herramienta.findOrCreate({
      where: { nombre: herramienta.nombre },
      defaults: herramienta,
    });

    await Pro_Herr.findOrCreate({
      where: {
        herramientaId: herr.id,
        metodoId: metodoEncontrado.id,
        publicacionId: publicacion.id,
      },
      defaults: {
        herramientaId: herr.id,
        metodoId: metodoEncontrado.id,
        publicacionId: publicacion.id,
      },
    });
  }
}

// Obtener datos completos para la respuesta
const materialesAsociados = await Material.findAll({
  where: { publicacionId: publicacion.id },
  attributes: ["id", "nombre", "descripcion", "marca"],
});

const herramientasAsociadas = await Herramienta.findAll({
  include: {
    model: Pro_Herr,
    where: { publicacionId: publicacion.id },
    attributes: [],
  },
  attributes: ["id", "nombre", "descripcion", "marca"],
});

const programasAsociados = await Programa.findAll({
  include: {
    model: Pro_Herr,
    where: { publicacionId: publicacion.id },
    attributes: [],
  },
  attributes: ["id", "nombre", "descripcion", "marca"],
});

return res.status(201).json({
  message: "Publicación creada con éxito",
  publicacion,
  materiales: materialesAsociados,
  herramientas: herramientasAsociadas,
  programas: programasAsociados,
});
} catch (error) {
console.error("Error en createUserPublicacion:", error);
return res.status(500).json({ message: "Error interno del servidor", error: error.message });
}
}
    
    
/* DESDE AQUÍ TODO LO QUE ESTÁ COMENTADO VOLVER A DESCOMENTAR    
       if (
        !herramientas ||
        herramientas.length === 0 ||
        !programas ||
        programas.length === 0
      ) {
        return res.status(400).json({
          message:
            "Debes proporcionar herramientas y programas para este método",
        });
      }


      // Manejar programas y herramientas
      for (const programa of programas) {
        // Crear o encontrar el programa
        const [prog] = await Programa.findOrCreate({
          where: { nombre: programa.nombre },
          defaults: programa, // Esto incluye descripción, marca, tutorial
        });

        if (programa.herramientas && programa.herramientas.length > 0) {
          for (const herramienta of programa.herramientas) {
            // Validar que la herramienta tenga al menos un nombre
            if (!herramienta.nombre) {
              console.error("Error: Herramienta sin 'nombre'");
              continue; // Pasar a la siguiente herramienta si el nombre no es válido
            }

            // Crear o encontrar la herramienta
            const [herr] = await Herramienta.findOrCreate({
              where: { nombre: herramienta.nombre },
              defaults: herramienta, // Esto incluye descripción y marca
            });

            // Crear la relación en la tabla intermedia Pro_Herr
            await Pro_Herr.findOrCreate({
              where: {
                programaId: prog.id,
                herramientaId: herr.id,
                metodoId: metodoEncontrado.id,
              },
              defaults: {
                programaId: prog.id,
                herramientaId: herr.id,
                metodoId: metodoEncontrado.id,
              },
            });
            console.log(
              `Relación creada: Programa ID ${prog.id}, Herramienta ID ${herr.id}, Método ID ${metodoEncontrado.id}`
            );
          }
        }
      }

      // Crear herramientas independientes que no estén vinculadas a programas
      for (const herramienta of herramientas) {
        if (!herramienta.nombre) continue; // Saltar si no tiene un nombre válido

        await Herramienta.findOrCreate({
          where: { nombre: herramienta.nombre },
          defaults: herramienta, // Esto incluye descripción y marca
        });
      }
    } else {
      // Si el método no es ni "tradicional" ni "digital", devolvemos un error
      return res.status(400).json({ message: "Tipo de método no reconocido" });
    }
       // **ADDITION: After handling materials, fetch associated materials for the response**
      const associatedMaterials = await Material.findAll({
      where: { metodoId: metodoEncontrado.id },
      attributes: ["id", "nombre"],
    });

    // Retorno exitoso
    return res
      .status(201)
      .json({ message: "Publicación creada con éxito", publicacion, materiales: associatedMaterials}); // **Include associated materials in the response**
  } catch (error) {
    console.error("Error en createUserPublicacion:", error);
    return res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
}
*/

/* async function updateUserPublicacion(req, res) {
    try {
        const [publicacionExist, publicacion] = await Publicacion.update(req.body, {
            returning: true,
            where: {
                id: res.locals.privado.id,
            },
        })
        if (publicacionExist !== 0) {
            return res.status(200).json({ message: 'Publicación actualizada', publicación: publicacion })
        } else {
            return res.status(404).send('Publicación no encontrada')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
 */
async function updateUserPublicacion(req, res) {
  try {
    if (!res.locals.privado) {
      return res.status(401).send("Usuario no autenticado");
    }

    console.log("ID recibido:", req.params.id);
    console.log("publicoId recibido:", res.locals.privado.id);

    const publicacion = await Publicacion.findOne({
      where: {
        id: req.params.id,
        publicoId: res.locals.privado.id,
      },
    });

    if (!publicacion) {
      return res.status(404).send("Publicación no encontrada o no autorizada");
    }

    await publicacion.update(req.body);

    return res.status(200).json({ message: "Publicación actualizada" });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
}

/* async function deleteUserPublicacion(req, res) {
    try {
        const publicacion = await Publicacion.destroy({
            where: {
                id: res.locals.privado.id,
            },
        })
        if (publicacion) {
            return res.status(200).json('Publicación borrada')
        } else {
            return res.status(404).send('Publicación no encontrada')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
} */

async function deleteUserPublicacion(req, res) {
  try {
    if (!res.locals.privado) {
      return res.status(401).send("Usuario no autenticado");
    }

    console.log("ID recibido:", req.params.id);
    console.log("publicoId recibido:", res.locals.privado.id);

    const publicacion = await Publicacion.destroy({
      where: {
        id: req.params.id,
        publicoId: res.locals.privado.id,
      },
    });

    if (!publicacion) {
      return res.status(404).send("Publicación no encontrada o no autorizada");
    } else {
      return res.status(200).json({ message: "Publicación borrada" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllPublicaciones,
  getOnePublicacion,
  createPublicacion,
  updatePublicacion,
  deletePublicacion,
  createUserPublicacion,
  updateUserPublicacion,
  deleteUserPublicacion,
};
