import prisma from "../db";

// Get all
export const getUpdates = async (req, res) => {
  const productId = req.params.productId;
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  res.json({ data: product.updates });
};

// Create
export const createUpdate = async (req, res) => {
  const { title, body, productId } = req.body;

  const product  = await prisma.product.findUnique({
    where: {
      id: productId,
      belongsToId: req.user.id,
    },
  });

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    const update =  await prisma.update.create({
        data: {
            productId,
            title,
            body
        }
    });

    res.json({ data: update });
};

// // Update
// export const updateUpdate = async (req, res) => {
//   const productId = req.params.id;
//   const { name, price } = req.body;

//   const data = {
//     ...(name ? { name } : {}),
//     ...(price ? { price } : {}),
//   };

//   const updatedProduct = await prisma.product.update({
//     where: {
//       id: productId,
//       belongsToId: req.user.id,
//     },
//     data,
//   });

//   res.json({ data: updatedProduct });
// };

// // Delete
// export const deleteUpdate = async (req, res) => {
//   const productId = req.params.id;

//   const deletedProduct = await prisma.product.delete({
//     where: {
//       id: productId,
//       belongsToId: req.user.id,
//     },
//   });

//   res.json({ data: deletedProduct });
// };
