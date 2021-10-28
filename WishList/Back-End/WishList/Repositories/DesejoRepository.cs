using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.Contexts;
using WishList.Domains;
using WishList.Interfaces;

namespace WishList.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {
        WishlistContext ctx = new WishlistContext();
        public void cadastrarDesejo(Desejo novoDesejo)
        {
            ctx.Desejos.Add(novoDesejo);
            ctx.SaveChanges();
        }

        public List<Desejo> listarDesejos()
        {
            return ctx.Desejos.Include(a => a.IdUsuarioNavigation).ToList();
        }
    }
}
