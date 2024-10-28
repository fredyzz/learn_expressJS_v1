import prisma from "../db";

// Get all
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
        products: true,
        },
  });

  res.json({data: user.products});
};

// Get one
export const getOneProduct = async (req, res) => {
  const productId = req.params.id;

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
      belongsToId: req.user.id,
    },
  });

  res.json({data: product});
};

// Create
export const createProduct = async (req, res, next) => {
  try {
    const { name, price } = req.body;

    // Name is required, price is optional
    const data = {
      name,
      ...(price ? { price } : {}),
      belongsToId: req.user.id,
    };
  
    const product = await prisma.product.create({
      data,
    });
  
    res.json({data: product});
  } catch (e) {
    next(e)
  }
 
}

// Update
export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;

  const data = {
    ...(name ? { name } : {}),
    ...(price ? { price } : {})
  };

  const updatedProduct = await prisma.product.update({
    where: {
      id: productId,
      belongsToId: req.user.id,
    },
    data,
  });

  res.json({ data: updatedProduct });
};

// Delete
export const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  const deletedProduct = await prisma.product.delete({
    where: {
      id: productId,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: deletedProduct });
};