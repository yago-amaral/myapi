import Post from "../models/Post.js";

export async function getPosts(req, res) {
    const posts = await Post.find({});

    res.json(posts);
}

export async function getSinglePost(req, res) {
    const { id } = req.params;
    
    try {
        const post = await Post.findById(id);
        res.json(post);
    } catch (err) {
        res.status(404).json({
            error: "Recurso não encontrado",
            message: err.message
        });
    }

}

export async function createPost(req, res) {}