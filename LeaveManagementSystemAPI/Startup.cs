using LeaveManagementSystemAPI.DBConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LeaveManagementSystemAPI.Repository;


namespace LeaveManagementSystemAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "LeaveManagementSystemAPI", Version = "v1" });
            });


            services.AddDbContext<LMSDataContext>(option => option.UseSqlServer(Configuration.GetConnectionString("LMSConnection")));

            services.AddScoped<ILMSEmployeeRepository, LMSEmployeeRepository>();

            services.AddScoped<ILMSLeaveRepository, LMSLeaveRepository>();

            services.AddScoped<ILMSManagerRepository, LMSManagerRepository>();

            services.AddScoped<ILMSLeavesRepository, LMSLeaveReqAlloc>();



            services.AddCors(options => options.AddDefaultPolicy(
                builder => builder.WithOrigins("*").AllowAnyHeader().
                AllowAnyMethod().AllowAnyOrigin())
                );
        
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "LeaveManagementSystemAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
