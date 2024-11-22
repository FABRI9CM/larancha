const db = require('../database');


exports.getAllUsers = async (req, res) => {
    try {
        const result = await db.query('SELECT [ID_Cliente] ,[Username],[Email],[Phone_Number] ,[ID_NivelAcceso],[Password]FROM [dbo].[Usuario]');
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const result = await db.query('SELECT TOP (1000) [ID_Product] ,[Product_Name],[Product_Price],[product_Description],[ID_Category],[Imagen_URL],[Disponibilidad]FROM [La_Rancha_DB].[dbo].[producto]');
        res.status(200).json(result.recordset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('SELECT * FROM Users WHERE ID_Cliente = @id', {
            input: 'id',
            type: db.Int,
            value: id
        });
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(result.recordset[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProductsById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('SELECT * FROM producto WHERE ID_Product = @id', {
            input: 'id',
            type: db.Int,
            value: id
        });
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(result.recordset[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await db.query('INSERT INTO [dbo].[Usuario]([ID_Cliente],[Username],[Email],[Phone_Number],[ID_NivelAcceso] ,[Password]) VALUES (@name, @email, @password)', {
            input: [
                { name: 'ID_Cliente', type: db.VarChar, value: ID_Cliente },
                { name: 'Username', type: db.VarChar, value: Username },
                { name: 'Email', type: db.VarChar, value: Email },
                { name: 'Phone_Number', type: db.VarChar, value: Phone_Number },
                { name: 'ID_NivelAcceso', type: db.Int, value: ID_NivelAcceso },
                { name: 'Password', type: db.VarChar, value: Password }
            ]
        });
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    const { Product_Name, Product_Price, product_Description, ID_Category, Imagen_URL, Disponibilidad } = req.body;
    try {
        await db.query('INSERT INTO producto (Product_Name, Product_Price, product_Description, ID_Category, Imagen_URL, Disponibilidad) VALUES (@Product_Name, @Product_Price, @product_Description, @ID_Category, @Imagen_URL, @Disponibilidad)', {
            input: [
                { name: 'Product_Name', type: db.VarChar, value: Product_Name },
                { name: 'Product_Price', type: db.Decimal, value: Product_Price },
                { name: 'product_Description', type: db.VarChar, value: product_Description },
                { name: 'ID_Category', type: db.Int, value: ID_Category },
                { name: 'Imagen_URL', type: db.VarChar, value: Imagen_URL },
                { name: 'Disponibilidad', type: db.Int, value: Disponibilidad }
            ]
        });
        res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.updateProduct = async (req, res) => {
    const { ID_Product } = req.params;
    const { Product_Name, Product_Price, product_Description, ID_Category, Imagen_URL, Disponibilidad } = req.body;
    try {
        await db.query('UPDATE producto SET Product_Name = @Product_Name, Product_Price = @Product_Price, product_Description = @product_Description, ID_Category = @ID_Category, Imagen_URL = @Imagen_URL, Disponibilidad = @Disponibilidad WHERE ID_Product = @ID_Product', {
            input: [
                { name: 'ID_Product', type: db.Int, value: ID_Product },
                { name: 'Product_Name', type: db.VarChar, value: Product_Name },
                { name: 'Product_Price', type: db.Decimal, value: Product_Price },
                { name: 'product_Description', type: db.VarChar, value: product_Description },
                { name: 'ID_Category', type: db.Int, value: ID_Category },
                { name: 'Imagen_URL', type: db.VarChar, value: Imagen_URL },
                { name: 'Disponibilidad', type: db.Int, value: Disponibilidad }
            ]
        });
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Eliminar un usuario por ID
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM Users WHERE ID_Cliente = @id', {
            input: 'id',
            type: db.Int,
            value: id
        });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const { ID_Product } = req.params;
    try {
        await db.query('DELETE FROM producto WHERE ID_Product = @ID_Product', {
            input: 'ID_Product',
            type: db.Int,
            value: ID_Product
        });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}