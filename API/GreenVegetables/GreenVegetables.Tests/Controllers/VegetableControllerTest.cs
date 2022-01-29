using GreenVegetables;
using GreenVegetables.Controllers;
using GreenVegetables.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace GreenVegetables.Tests.Controllers
{
    [TestClass]
    public class VegetableControllerTest
    {
        [TestMethod]
        public void Get()
        {
            // Arrange
            var controller = new VegetableController();

            // Act
            var result = controller.Get();

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual(3, result.Count());

            var element = result.ElementAt(0);
            Assert.AreEqual(1, element.ID);
            Assert.AreEqual("Default_Potato", element.Name);
            Assert.AreEqual(3.5m, element.Price);

            element = result.ElementAt(1);
            Assert.AreEqual(2, element.ID);
            Assert.AreEqual("Default_Tomato", element.Name);
            Assert.AreEqual(2.0m, element.Price);

            element = result.ElementAt(2);
            Assert.AreEqual(3, element.ID);
            Assert.AreEqual("Default_Spinach", element.Name);
            Assert.AreEqual(1.5m, element.Price);
        }

        [TestMethod]
        public void GetById()
        {
            // Arrange
            var controller = new VegetableController();

            // Act
            var result = controller.Get(1);

            // Assert
            Assert.AreEqual(1, result.ID);
            Assert.AreEqual("Default_Potato", result.Name);
            Assert.AreEqual(3.5m, result.Price);
        }

        [TestMethod]
        public void Post()
        {
            // Arrange
            var controller = new VegetableController();

            // Act
            var oldCount = controller.Get().Count();
            controller.Post(new VegetableModel { Name = "Test", Price = 6.5m });
            var newCount = controller.Get().Count();

            // Assert
            Assert.AreEqual(oldCount + 1, newCount);
        }

        [TestMethod]
        public void Put()
        {
            // Arrange
            var controller = new VegetableController();

            // Act
            controller.Put(2, new VegetableModel { Name = "Tomato", Price = 4.5m});
            var result = controller.Get(2);

            // Assert
            Assert.AreEqual(2, result.ID);
            Assert.AreEqual("Tomato", result.Name);
            Assert.AreEqual(4.5m, result.Price);
        }

        [TestMethod]
        public void Delete()
        {
            // Arrange
            var controller = new VegetableController();

            // Act
            var oldCount = controller.Get().Count();
            controller.Delete(1);
            var newCount = controller.Get().Count();

            // Assert
            Assert.AreEqual(oldCount - 1, newCount);
        }
    }
}
