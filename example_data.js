async function loadData() {
    const response = await axios.get('https://raw.githubusercontent.com/SamTan20240527/TestApexCharts/refs/heads/main/example_data.json');
    return response.data.yearly;
}
