const handler = async (m, {conn}) => {
  m.reply(global.vs8fem);
};
handler.command = /^(vs8fem|vs8fem)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.vs8fem = `
* ESTOS SON LOS NUMEROS DE MIS CREADORES
+1 (829) 218-4151
`;
