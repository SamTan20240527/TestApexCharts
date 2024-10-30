async function loadData() {
    const response = await axios.get('example_data.json');
    return response.data.yearly;
}
