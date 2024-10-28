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

// Update
export const updateUpdate = async (req, res) => {
  const updateId = req.params.id;
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    }
  });

  const updates = products.reduce((acc, product) => {
    return [...acc, ...product.updates];
  }, [])

  const match =  updates.find((update) => update.id === updateId);

  if (!match) {
    return res.status(404).json({ message: "Update not found" });
  }

  const updatedUpdate = await prisma.update.update({
    where: {
      id: updateId,
    },
    data: req.body,
  });

  res.json({ data: updatedUpdate });
};

// Delete
export const deleteUpdate = async (req, res) => {
  const updateId = req.params.id;
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    }
  });

  const updates = products.reduce((acc, product) => {
    return [...acc, ...product.updates];
  }, [])

  const match =  updates.find((update) => update.id === updateId);

  if (!match) {
    return res.status(404).json({ message: "Update not found" });
  }

  const deletedUpdate = await prisma.update.delete({
    where: {
      id: updateId,
    },
  });

  res.json({ data: deletedUpdate });
};
