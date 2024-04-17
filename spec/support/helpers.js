import fs from 'fs'

const carregarFixture = (nomeArquivo) => {
    const fixture = fs.readFileSync(`./spec/support/fixtures/${nomeArquivo}.json`, 'utf8')
    return JSON.parse(fixture)
}

export default carregarFixture