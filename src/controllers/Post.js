import Post from "../models/Post.js";

export async function getPosts(req, res) {
    const posts = await Post.find({});

    res.json(posts);
}

export async function getSinglePost(req, res) {
    const { id } = req.params;
    
    try {
        const post = await Post.findById(id);

        if (!post) throw new Error("Este post foi deletado");

        res.json(post);
    } catch ({ message }) {
        res.status(404).json({
            error: "Recurso não encontrado",
            message
        });
    }

}

export async function createPost(req, res) {
    try {
        const { title, content } = req.body;
        const post = { title, content };

        await Post.create(post);

        res.status(200).json({
            msg: "Post criado com sucesso",
            post
        });
    } catch ({ message }) {
        res.status(400).json({
            error: "Não foi possível criar o post",
            message
        });
    }
}

export async function deletePost(req, res) {
    const { id } = req.params;

    try {
        const post = await Post.findByIdAndDelete(id);

        if (!post) throw new Error("Post não encontrado");

        res.status(200).json({
            msg: "Post deletado com sucesso",
            post
        });
    } catch ({ message }) {
        res.status(400).json({
            error: "Não foi possível deletar o post",
            message
        });
    }
}
