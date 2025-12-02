export const sendMessage = async (query: string): Promise<string> => {
  try {
    // Use relative path to leverage the Docusaurus dev server proxy
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    // API returns 'answer' field
    return data.answer || data.ans || "Sorry, I couldn't understand that.";
  } catch (error) {
    console.error("Error calling chat API:", error);
    throw error;
  }
};
