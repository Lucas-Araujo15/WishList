using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.Domains;
using WishList.Interfaces;
using WishList.Repositories;

namespace WishList.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class DesejosController : ControllerBase
    {
        private IDesejoRepository _desejos { get; set; }
        public DesejosController()
        {
            _desejos = new DesejoRepository();
        }
        
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_desejos.listarDesejos());
        }

        [HttpPost]
        public IActionResult Cadastrar(Desejo desejoNovo)
        {
            _desejos.cadastrarDesejo(desejoNovo);
            return StatusCode(201);
        }
    }
}
