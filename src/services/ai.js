const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a 
recipe they could make with some or all of those ingredients. The recipe can include additional ingredients 
they didn't mention, but try not to include too many extra ingredients. Tell me the name of 
the recipe and format your response in markdown to make it easier to render to a web page.
`
const token = process.env.TOKEN_KEY

export async function getRecipeFromAI(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const promise = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-r1:free",
          "messages": [
            { role:"system", content: SYSTEM_PROMPT },
            { role: "user", "content": `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`}
          ]
        })
      });
    
    const response = await promise.json()
    return response.choices[0].message.content
}