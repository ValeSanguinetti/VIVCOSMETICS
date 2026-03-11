import { supabase } from "../db.js";

const controller = {

async getProducts(req,res){

const { data, error } = await supabase
.from("products")
.select("*")

if(error) return res.status(500).json(error)

res.json(data)

},
async createProduct(req,res){

const { name, category,stock, price, image_url, gradient } = req.body

const { data, error } = await supabase
.from("products")
.insert([
{
name,
category,
stock,
price,
image_url,
gradient
}
])

if(error) return res.status(500).json(error)

res.json(data)

},
async updateProduct(req,res){

const { id } = req.params

const { data, error } = await supabase
.from("products")
.update(req.body)
.eq("id", id)

if(error) return res.status(500).json(error)

res.json(data)

},
async getProduct(req,res){

const { id } = req.params

const { data, error } = await supabase
.from("products")
.select("*")
.eq("id", id)
.single()

if(error) return res.status(500).json(error)

res.json(data)

},
async deleteProduct(req, res) {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) return res.status(500).json(error);

    res.json({ message: "Producto eliminado correctamente", data });
  }


};



export { controller };